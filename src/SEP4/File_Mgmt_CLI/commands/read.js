
import fs from "fs/promises";
async function readfile(filename) {
    let data = await fs.readFile(`files/${filename}`,"utf-8");
    console.log(data);

    
}  // for reading 

export { readfile };