import {
    TextractClient, DetectDocumentTextCommand
} from "@aws-sdk/client-textract";

import dotenv from  "dotenv" ;
import fs from "fs";
import { bytes } from "stream/consumers";
dotenv.config();

//client 
const textract = new TextractClient({
    region : process.env.AWS_REGION
}) ;

//READ IMAGES
const img = fs.readFileSync("./sample.png");

//tex req 
const command = new DetectDocumentTextCommand({
    document:{
        Bytes:Image
    }
});



//extract limee block 
const text = Response.Blocks 
        .filter(block => block.BlockType === "LINE" )
        .map(block => block.text)
        .join("\n");

console.log("\n===== extracted text ===\n");
console.log(text);

