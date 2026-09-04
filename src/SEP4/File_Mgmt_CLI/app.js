// console.log(process.argv);
// console.log(process.argv[0]);
// console.log(process.argv[1]);
// console.log(process.argv[2]);
// console.log(process.argv[3]);

//============================================= create ====---------------

// import { createsfile } from "./commands/creates.js";

// const cmd = process.argv[2]; // file 
// const fname = process.argv[3]; // name 
// if (cmd === "create") {
//     await createsfile(fname);
// }

//-------------------------------------read -------------------------
// import  { readfile } from "./commands/read.js"

// const cmd = process.argv[2]; 
// const fname = process.argv[3];
// if(cmd === "readfile"){
//     await readfile(fname);
// }

//-------------------------------------write  -------------------------
// import { writefile } from "./commands/writefile.js";
import { write } from "./commands/write.js"
const cmd = process.argv[2];
const fname = process.argv[3];
const data = process.argv[4];


if(cmd === "write"){
    await write(fname,data);
};
