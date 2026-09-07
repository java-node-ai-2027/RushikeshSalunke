import { MongoClient } from "mongodb";
const uri = "mongodb://127.0.0.1:27017";
const client = new MongoClient(uri);
await client.connect();
console.log("MongoDB connected vroo");
const db = client.db("temp1");
export default db;

