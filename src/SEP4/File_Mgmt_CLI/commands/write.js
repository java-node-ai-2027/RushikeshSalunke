import fs from "fs/promises";
async function write(filename, data) {
    await fs.writeFile(`files/${filename}`, data);
    console.log("File data updated ");

}


export { write };