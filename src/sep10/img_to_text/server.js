const http = require("http");
const fs = require("fs");
const path = require("path");
const Busboy = require("busboy");
const { MongoClient } = require("mongodb");
const { createWorker } = require("tesseract.js");

// --------------- DB connection ---------------
const PORT = 3000;
const mongoUrl = "mongodb://127.0.0.1:27017";
const client = new MongoClient(mongoUrl);
let collection;

async function connectDatabase() {
    await client.connect();
    const database = client.db("ocr_database");
    collection = database.collection("ocr_documents");
    console.log("MongoDB connected");
}

// --------------- Upload + OCR ---------------
function uploadFile(req, res) {
    const busboy = Busboy({ headers: req.headers });
    let filePath;
    let fileName;
    let fileWritePromise;

    busboy.on("file", function (fieldName, file, info) {
        console.log("File received");

        fileName = info.filename;
        console.log("Filename:", fileName);
        console.log("Type:", info.mimeType);

        // make sure uploads folder exists
        const uploadsDir = path.join(__dirname, "uploads");
        if (!fs.existsSync(uploadsDir)) {
            fs.mkdirSync(uploadsDir, { recursive: true });
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
                res.writeHead(400, { "Content-Type": "application/json" });
                res.end(JSON.stringify({ message: "No file was uploaded" }));
                return;
            }

            await fileWritePromise;
            console.log("File saved:", filePath);

            console.log("Starting OCR...");
            const worker = await createWorker("eng");
            const result = await worker.recognize(filePath);
            const text = result.data.text;
            await worker.terminate();

            console.log("OCR text extracted");

            await collection.insertOne({
                fileName: fileName,
                text: text,
                createdAt: new Date()
            });
            console.log("OCR data saved in MongoDB");

            // clean up temp file
            fs.unlinkSync(filePath);

            res.writeHead(200, { "Content-Type": "application/json" });
            res.end(JSON.stringify({ message: "Upload done and OCR done" }));

        } catch (error) {
            console.log("Upload error:", error);
            res.writeHead(500, { "Content-Type": "application/json" });
            res.end(JSON.stringify({ message: "Something went wrong" }));
        }
    });

    req.pipe(busboy);
}

// --------------- Get documents (SERVER-SIDE) ---------------
// async function getDocuments(req, res) {
//     try {
//         console.log("=== /documents route hit ===");

//         const documents = await collection
//             .find()
//             .sort({ createdAt: -1 })
//             .toArray();

//         console.log("Found documents count:", documents.length);

//         res.writeHead(200, { "Content-Type": "application/json" });
//         res.end(JSON.stringify(documents));

//     } catch (error) {
//         console.log("Get documents error:", error);
//         res.writeHead(500, { "Content-Type": "application/json" });
//         res.end(JSON.stringify({
//             message: "Could not get documents",
//             error: error.message
//         }));
//     }
// }

const { ObjectId } = require("mongodb");   // add this at the top with other imports

async function getDocuments(req, res) {
    try {
        // parse query string, e.g. /documents?id=65f1a...
        const urlObj = new URL(req.url, `http://${req.headers.host}`);
        const id = urlObj.searchParams.get("id");

        let query = {};
        if (id) {
            query = { _id: new ObjectId(id) };   // ✅ only this one document
        }

        const documents = await collection
            .find(query)
            .sort({ createdAt: -1 })
            .toArray();

        res.writeHead(200, { "Content-Type": "application/json" });
        res.end(JSON.stringify(documents));

    } catch (error) {
        console.log("Get documents error:", error);
        res.writeHead(500, { "Content-Type": "application/json" });
        res.end(JSON.stringify({ message: "Could not get documents" }));
    }
}



// --------------- Server ---------------
const server = http.createServer(function (req, res) {

    // Home page
    if (req.url === "/" && req.method === "GET") {
        const filePath = path.join(__dirname, "index.html");
        fs.readFile(filePath, function (error, data) {
            if (error) {
                res.writeHead(500);
                res.end("Cannot open HTML file");
                return;
            }
            res.writeHead(200, { "Content-Type": "text/html" });
            res.end(data);
        });
        return;
    }

    // Upload route
    if (req.url === "/upload" && req.method === "POST") {
        uploadFile(req, res);
        return;
    }

    // Get documents route
    if (req.url === "/documents" && req.method === "GET") {
        getDocuments(req, res);
        return;
    }

    // 404
    res.writeHead(404);
    res.end("Cannot perform this request");
});

// --------------- Start ---------------
async function startServer() {
    try {
        await connectDatabase();

        server.listen(PORT, function () {
            console.log(`Server running at http://localhost:${PORT}`);
        });

    } catch (error) {
        console.log("Cannot start server");
        console.log(error);
    }
}

startServer();