//we can use import also 
const http = require("http");
const fs = require("fs");
const path = require("path");
const Busboy = require("busboy");
const { MongoClient } = require("mongodb");
const { createWorker } = require("tesseract.js");


//---------------db connected vroo  
const PORT = 3000;
const mongoUrl = "mongodb://127.0.0.1:27017";
const client = new MongoClient(mongoUrl);
let collection;

async function connectDatabase() {
    await client.connect();
    const database = client.db("ocr_database");
    collection = database.collection("ocr_documents");
    console.log("MongoDB connected brooo  ");
}
//--------------------------------------------------------------------------------

const server = http.createServer(async function(req, res) {
    if (req.url === "/" && req.method === "GET") {
        const filePath = path.join(__dirname, "index.html");

        fs.readFile(filePath, function(error, data) {
            if (error) {
                res.writeHead(500);
                res.end("Could not open HTML file");
                return;
            }

            res.writeHead(200, {
                "Content-Type": "text/html"
            });
        res.end(data);
        });
        return;
    }
    if (req.url === "/upload" && req.method === "POST") {
        uploadFile(req, res);
        return;
    }
    if (req.url === "/documents" && req.method === "GET") {
        await getDocuments(req, res);
        return;
    }
    res.writeHead(404);
    res.end("Page not found");
});

async function startServer() {
    try {
        await connectDatabase();
        server.listen(PORT, function() {
            console.log(`Server running at http://localhost:${PORT}`);
        });
    } catch (error) {
        console.log("Could not start server");
        console.log(error);
    }
}
startServer();

//------------------------------------------------------------------------------


function uploadFile(req, res) {
    const busboy = Busboy({ headers: req.headers });
    let filePath;
    let fileName;
    let fileWritePromise;

    busboy.on("file", function(fieldName, file, info) {
       
        console.log("File received 100.... % ");
        fileName = info.filename;
        console.log("Filename:", fileName);
        console.log("Type:", info.mimeType);

        filePath = path.join(__dirname, "uploads", fileName);
        const writeStream = fs.createWriteStream(filePath);
        file.pipe(writeStream);

        fileWritePromise = new Promise(function(resolve, reject) {
            writeStream.on("finish", resolve);
            writeStream.on("error", reject);
        });
    });

    busboy.on("finish", async function() {
        try {
            await fileWritePromise;
            console.log("File saved:", filePath);

            console.log("Starting OCR...");
            const worker = await createWorker("eng");
            const result = await worker.recognize(filePath);
            const text = result.data.text;
            await worker.terminate();

            console.log("OCR text:");
            console.log(text);

            await collection.insertOne({
                filename: fileName,
                text: text,
                createdAt: new Date()
            });

            console.log("OCR data saved in MongoDB");

            fs.unlinkSync(filePath);

            res.writeHead(200, {
                "Content-Type": "application/json"
            });

            res.end(JSON.stringify({
                message: "File upload done and OCR done is visible on terminal "
            }));
        } catch (error) {
            console.log("Upload error:", error);

            res.writeHead(500, {
                "Content-Type": "application/json"
            });

            res.end(JSON.stringify({
                message: "Something went wrong"
            }));
        }
    });

    req.pipe(busboy);
}

async function getDocuments(req, res) {
    try {
        const documents = await collection.find().sort({ createdAt: -1 }).toArray();
        console.log("Documents from MongoDB:", documents);

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
            message: "Could not get documents"
        }));
    }}
