const http = require("http");
const fs = require("fs");
const path = require("path");
const Busboy = require("busboy");
const { MongoClient, ObjectId } = require("mongodb");
const { createWorker } = require("tesseract.js");

// ---------------- CONFIG ----------------

const PORT = 3000;

const mongoUrl = "mongodb://127.0.0.1:27017";

const client = new MongoClient(mongoUrl);

let collection;

// ---------------- DATABASE ----------------

async function connectDatabase() {
    await client.connect();

    const database = client.db("ocr_database");

    collection = database.collection("ocr_documents");

    console.log("MongoDB connected");
}

// ---------------- UPLOAD + OCR ----------------

function uploadFile(req, res) {

    const busboy = Busboy({
        headers: req.headers
    });

    let filePath;
    let fileName;
    let fileWritePromise;

    busboy.on("file", function (fieldName, file, info) {

        console.log("File received");

        fileName = info.filename;

        console.log("Filename:", fileName);
        console.log("Type:", info.mimeType);

        const uploadsDir = path.join(__dirname, "uploads");

        if (!fs.existsSync(uploadsDir)) {
            fs.mkdirSync(uploadsDir, {
                recursive: true
            });
        }

        filePath = path.join(uploadsDir, fileName);

        const writeStream = fs.createWriteStream(filePath);

        file.pipe(writeStream);

        fileWritePromise = new Promise(function (resolve, reject) {

            writeStream.on("finish", resolve);

            writeStream.on("error", reject);

        });

    });

    busboy.on("finish", async function () {

        try {

            if (!fileWritePromise) {

                res.writeHead(400, {
                    "Content-Type": "application/json"
                });

                res.end(JSON.stringify({
                    message: "No file was uploaded"
                }));

                return;
            }

            // Wait until file is completely saved
            await fileWritePromise;

            console.log("File saved:", filePath);

            // ---------------- OCR ----------------

            console.log("Starting OCR...");

            const worker = await createWorker("eng+hin+mar");

            const result = await worker.recognize(filePath);

            const text = result.data.text;

            await worker.terminate();

            console.log("OCR text extracted");

            // ---------------- SAVE TO MONGODB ----------------

            const insertResult = await collection.insertOne({

                fileName: fileName,

                text: text,

                createdAt: new Date()

            });

            console.log("OCR data saved in MongoDB");

            // Delete uploaded file after OCR
            fs.unlinkSync(filePath);

            // ---------------- RESPONSE ----------------

            res.writeHead(200, {
                "Content-Type": "application/json"
            });

            res.end(JSON.stringify({

                message: "Upload done and OCR done",

                id: insertResult.insertedId.toString()

            }));

        } catch (error) {

            console.log("Upload error:", error);

            res.writeHead(500, {
                "Content-Type": "application/json"
            });

            res.end(JSON.stringify({

                message: "Something went wrong",

                error: error.message

            }));

        }

    });

    req.pipe(busboy);
}

// ---------------- GET DOCUMENTS ----------------

async function getDocuments(req, res) {

    try {

        const urlObj = new URL(
            req.url,
            `http://${req.headers.host}`
        );

        const id = urlObj.searchParams.get("id");

        let query = {};

        // If ID is provided
        if (id) {

            if (!ObjectId.isValid(id)) {

                res.writeHead(400, {
                    "Content-Type": "application/json"
                });

                res.end(JSON.stringify({
                    message: "Invalid document ID"
                }));

                return;
            }

            query = {
                _id: new ObjectId(id)
            };

        }

        const documents = await collection
            .find(query)
            .sort({
                createdAt: -1
            })
            .toArray();

        res.writeHead(200, {
            "Content-Type": "application/json"
        });

        res.end(JSON.stringify(documents));

    } catch (error) {

        console.log("Get documents error:", error);

        res.writeHead(500, {
            "Content-Type": "application/json"
        });

        res.end(JSON.stringify({

            message: "Could not get documents",

            error: error.message

        }));

    }
}

// ---------------- SERVER ----------------

const server = http.createServer(function (req, res) {

    // HOME PAGE
    if (
        req.url === "/" &&
        req.method === "GET"
    ) {

        const filePath = path.join(
            __dirname,
            "index.html"
        );

        fs.readFile(
            filePath,
            function (error, data) {

                if (error) {

                    res.writeHead(500);

                    res.end(
                        "Cannot open HTML file"
                    );

                    return;
                }

                res.writeHead(200, {
                    "Content-Type": "text/html"
                });

                res.end(data);

            }
        );

        return;
    }

    // UPLOAD
    if (
        req.url === "/upload" &&
        req.method === "POST"
    ) {

        uploadFile(req, res);

        return;
    }

    // GET DOCUMENTS
    if (
        req.url.startsWith("/documents") &&
        req.method === "GET"
    ) {

        getDocuments(req, res);

        return;
    }

    // NOT FOUND
    res.writeHead(404);

    res.end("Cannot perform this request");

});

// ---------------- START SERVER ----------------

async function startServer() {

    try {

        await connectDatabase();

        server.listen(
            PORT,
            function () {

                console.log(
                    `Server running at http://localhost:${PORT}`
                );

            }
        );

    } catch (error) {

        console.log("Cannot start server");

        console.log(error);

    }

}

startServer();