import http from "http";
import dotenv from "dotenv";
import { connectDB } from "./db.js";

dotenv.config();
const PORT = process.env.PORT || 5000;
let db;
const server = http.createServer(async (req, res) => {
    res.setHeader("Content-Type", "application/json");
    console.log(req.method, req.url);
    // API logic will come here
});

db = await connectDB();

server.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`);
});