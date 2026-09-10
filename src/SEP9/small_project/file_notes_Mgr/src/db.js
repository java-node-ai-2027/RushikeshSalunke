import { MongoClient } from "mongodb";

const url = process.env.MONGODB_URI || "mongodb://127.0.0.1:27017";
const client = new MongoClient(url);

let db;

export async function connectDB() {
    try {
        await client.connect();
        db = client.db("file_notes_db");
        console.log("Connected to MongoDB successfully now can preceed ");
        return db;
    } catch (err) {
        console.error("MongoDB connection error:", err.message);
        throw err;
    }
}

export function getDB() {
    return db;
}

