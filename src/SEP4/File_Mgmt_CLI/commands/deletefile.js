import fs from "fs/promises";

async function deletefile(filename) {
    await fs.writeFile(`files/${filename}`);
    console.log(" file deleted succesfully ");

}

export { deletefile };