
import http from "http";
import fs from "fs/promises";
import path from "path";
import { fileURLToPath } from "url";
import { ObjectId } from "mongodb";
import { connectDB, getDB } from "./db.js";

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const publicDir = path.resolve(__dirname, "../public");
const storageDir = path.resolve(__dirname, "../storage");

// Helper: send JSON response
function sendJSON(res, status, data) {
    res.writeHead(status, { "Content-Type": "application/json" });
    res.end(JSON.stringify(data));
}

// Helper: read request body
function getBody(req) {
    return new Promise((resolve) => {
        let body = "";
        req.on("data", chunk => { body += chunk.toString(); });
        req.on("end", () => {
            try {
                resolve(body ? JSON.parse(body) : {});
            } catch {
                resolve({});
            }
        });
    });
}

const server = http.createServer(async (req, res) => {
    const url = new URL(req.url, `http://${req.headers.host}`);
    const pathname = url.pathname;

    try {
        // 1. FILE APIs (Local storage)
        if (pathname === "/api/files" && req.method === "GET") {
            await fs.mkdir(storageDir, { recursive: true });
            const files = await fs.readdir(storageDir);
            return sendJSON(res, 200, { files });
        }

        if (pathname === "/api/files" && req.method === "POST") {
            const body = await getBody(req);
            if (!body.name) {
                return sendJSON(res, 400, { message: "File name is required" });
            }
            await fs.mkdir(storageDir, { recursive: true });
            const filePath = path.join(storageDir, path.basename(body.name));
            await fs.writeFile(filePath, body.content || "", "utf8");
            return sendJSON(res, 201, { message: "File created" });
        }

        if (pathname.startsWith("/api/files/") && req.method === "DELETE") {
            const fileName = path.basename(decodeURIComponent(pathname.replace("/api/files/", "")));
            const filePath = path.join(storageDir, fileName);
            await fs.unlink(filePath);
            return sendJSON(res, 200, { message: "File deleted" });
        }

        // 2. NOTE APIs (MongoDB)
        if (pathname === "/api/notes" && req.method === "GET") {
            const notes = await getDB().collection("notes").find().sort({ _id: -1 }).toArray();
            return sendJSON(res, 200, { notes });
        }

        if (pathname === "/api/notes" && req.method === "POST") {
            const body = await getBody(req);
            if (!body.title || !body.content) {
                return sendJSON(res, 400, { message: "Title and content required" });
            }
            const note = { title: body.title, content: body.content, date: new Date() };
            const result = await getDB().collection("notes").insertOne(note);
            return sendJSON(res, 201, { note: { _id: result.insertedId, ...note } });
        }

        if (pathname.startsWith("/api/notes/") && req.method === "DELETE") {
            const id = pathname.replace("/api/notes/", "");
            if (!ObjectId.isValid(id)) {
                return sendJSON(res, 400, { message: "Invalid ID" });
            }
            await getDB().collection("notes").deleteOne({ _id: new ObjectId(id) });
            return sendJSON(res, 200, { message: "Note deleted" });
        }

        // 3. STATIC FILES (Frontend: index.html, style.css, app.js)
        const fileToServe = pathname === "/" ? "index.html" : pathname.slice(1);
        const staticPath = path.join(publicDir, fileToServe);

        try {
            const content = await fs.readFile(staticPath);
            const ext = path.extname(staticPath);
            const contentType = ext === ".css" ? "text/css" : ext === ".js" ? "application/javascript" : "text/html";
            res.writeHead(200, { "Content-Type": contentType });
            return res.end(content);
        } catch {
            return sendJSON(res, 404, { message: "Page not found" });
        }

    } catch (err) {
        console.error("Server error:", err);
        return sendJSON(res, 500, { message: "Server error" });
    }
});

const PORT = 3000;

async function start() {
    try {
        await connectDB();
        server.listen(PORT, () => {
            console.log(`Server running at http://localhost:${PORT}`);
        });
    } catch (err) {
        console.error("Could not start server:", err.message);
    }
}

start();