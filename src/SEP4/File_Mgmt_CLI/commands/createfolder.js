import fs from "fs/promises";

async function createfolder(foldername) {
    await fs.mkdir(`files/${foldername}`);

    console.log("Folder created successfully");
}

export { createfolder };