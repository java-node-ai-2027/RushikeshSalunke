import fs from "fs/promises";
async function createsfile(filename) {
    await fs.writeFile(`files/${filename}`, "");
    console.log(`file name "${filename}" is created succesfullly`);
}
export {createsfile};

    