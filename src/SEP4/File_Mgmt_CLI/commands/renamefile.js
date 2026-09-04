import fs from "fs/promises";

export async function renamefile(oldname ,  newfilename) {
    await fs.renamefile(`files${oldname ,newfilename}`);
    console.log("filen name changed bro ");

};
