// const fs = require("fs");
// const data = fs.readFileSync("data.txt","utf-8");
// console.log(data);


// import fs from "fs";
// const data = fs.readFileSync("data.txt","utf-8");
// console.log(data);
//-------------------
//  "type": "module",

// const fs = require("fs");
// import fs from "fs";
// console.log("1");
// fs.readFile("data.txt", "utf-8", (err, data) => {
//     if (err) {
//         console.log(err);
//         return;
//     }
//     console.log(data);
//     console.log("2");
// });

///---------------------------- write 
//const fs = require("fs");
// import fs from "fs";
// fs.writeFileSync(
//     "data.txt",
//     "Hello Node.js  i am performing a writingoperation "
// );

//---------------------------- append
// fs.appendFileSync(
//    "data.txt",
//    "\nlearning node is fun  for shruti "
// );
//=-----------------------------
//fs.mkdirSync("documents");

//-------------------
//  fs.existsSync("data.txt") ? console.log("yes available it ") : console.log("not available ");
//-----------------------------
//fs.mkdirSync("pick.jpg");

// fs.unlinkSync("pick.jpg");
//-----------------------------
// // for above Operation	API
// Read file	readFile()
// Read file sync	readFileSync()
// Write file	writeFile()
// Write sync	writeFileSync()
// Append	appendFile()
// Create folder	mkdir()
// Read folder	readdir()
// Delete file	unlink()
// Rename	rename()
// Check existence	existsSync()
//---------------------------------------------------------------

// import path from"path";
// const filePath = path.join(
//     "metadata",
//     "data.txt"
// );
// console.log(filePath);

// console.log(path.basename(filePath));
// console.log(path.dirname(filePath));
// // console.log(path.extname("data2.txt"));

//-------------------------------os--------------------------------------------------
// import os from"os";
// console.log(os.platform());
// console.log(os.cpus());
// console.log(os.cpus().length);
// console.log(os.homedir());
// console.log(os.arch());
// console.log(os.totalmem());
// console.log(os.freemem());

//-------------------------------env--------------------------------------------------

// const appName = process.env.APP_NAME;
// const port = Number(process.env.PORT);
// const environment = process.env.NODE_ENV;

// console.log("App:", appName);
// console.log("Port:", port);
// console.log("Environment:", environment);

// console.log(process.env.NAME);
// console.log(process.env.PORT);
// console.log(process.env.CITY);

//---------------------------------------------------------------------------------
// fs.readFile("data.txt", "utf8", (err, data) => {
//     console.log(data);
// });  // async of a file read 

//-----------------------try with async  and error  -----------------------------------------------------------
// import fs from "fs";
// fs.readFile("data.txt", "utf8", (err, data) => {
//     if (err) {
//         console.error(err);
//         return;
//     }
//     console.log(data);
//});
//----------------------------------------------------------------------------------
// function sheisOK(name , callback){
//    console.log("hello rushi "+name+"  is ok ");
//    callback();
// };
// sheisOK("priti",()=>{
//    console.log("welcome ");
// });
//--------------
// import fs from "fs";
// fs.readFileSync("data.txt", "utf-8", (err, data) => {
//     if (err) {
//         console.log("Error:", err);
//         return;
//     }
//     console.log(data);
// });

//---------------------------------------------------

//const fs = require("fs").promises;

// import { promises as fs } from "fs";
// //const fs = require("fs").promises;

// fs.readFile("data.txt", "utf8")
//     .then(data => {
//         console.log("File Data:");
//         console.log(data);
//     })
//     .catch(err => {
//         console.log("Error:", err.message);
//     });

//------------------------File management CLI 




