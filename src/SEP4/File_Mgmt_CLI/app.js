// console.log(process.argv);
// console.log(process.argv[0]);
// console.log(process.argv[1]);
// console.log(process.argv[2]);
// console.log(process.argv[3]);
//===========================================import -=====================
import { createsfile } from "./commands/creates.js";
import  { readfile } from "./commands/read.js";
import { write } from "./commands/write.js"
import { deletefile } from "./commands/deletefile.js";
import { renamefile }  from "./commands/renamefile.js";
import { createfolder } from "./commands/createfolder.js";


//============================================= create ====---------------
const cmd = process.argv[2]; // file 
const fname = process.argv[3]; // name // old name  
const data = process.argv[4]; //  new name 


if (cmd === "creates") {
    await createsfile(fname);
}

//-------------------------------------read -------------------------

if(cmd === "readfile"){
    await readfile(fname);
}
//-------------------------------------write  -------------------------

if(cmd === "write"){
    await write(fname,data);
};

/// ============================================================================================

if(cmd === "delete"){
    await deletefile(fname);
};

//=====================================================================================

if(cmd === "rename"){
    await renamefile(fname);
};


//=--------------------------------------------------------------------------------

if(cmd ===  "createfolder"){
    await createfolder(fname);
};