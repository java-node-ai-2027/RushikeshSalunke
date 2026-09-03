import fs from "fs";
import path from "path";
import os from "os";

// Read file
const data = fs.readFileSync("data.txt", "utf-8");
console.log(data);

// Async read file
fs.readFile("data.txt", "utf-8", (err, data) => {
    if (err) {
        console.log(err);
        return;
    }
    console.log(data);
});

// Write file
fs.writeFileSync(
    "data.txt",
    "Hello Node.js, I am performing a writing operation"
);


// Append file
fs.appendFileSync(
    "data.txt",
    "\nLearning Node is fun for Shruti"
);

// Create folder
if (!fs.existsSync("documents")) {
    fs.mkdirSync("documents");
}


// Check file
if (fs.existsSync("data.txt")) {
    console.log("Yes, file is available");
} else {
    console.log("File is not available");
}

// Create and delte file
fs.writeFileSync("pick.jpg", "sample");
fs.unlinkSync("pick.jpg");


// Path
const filePath = path.join(
    "metadata",
    "data.txt"
);
console.log(filePath);

console.log(path.basename(filePath));
console.log(path.dirname(filePath));
console.log(path.extname("data2.txt"));


// OS

console.log(os.platform());
console.log(os.cpus());
console.log(os.cpus().length);
console.log(os.homedir());
console.log(os.arch());
console.log(os.totalmem());
console.log(os.freemem());


// Environment variables

const appName = process.env.APP_NAME;
const port = Number(process.env.PORT);
const environment = process.env.NODE_ENV;

console.log("App:", appName);
console.log("Port:", port);
console.log("Environment:", environment);

console.log(process.env.NAME);
console.log(process.env.PORT);
console.log(process.env.CITY);


// Async file read

fs.readFile("data.txt", "utf8", (err, data) => {
    if (err) {
        console.error(err);
        return;
    }

    console.log(data);
});


// Callback

function sheisOK(name, callback) {
    console.log("hello rushi " + name + " is ok");

    callback();
}

sheisOK("priti", () => {
    console.log("welcome");
});


// Promise

import { promises as fsPromises } from "fs";

fsPromises.readFile("data.txt", "utf8")
    .then(data => {
        console.log("File Data:");
        console.log(data);
    })
    .catch(err => {
        console.log("Error:", err.message);
    });






///ignore it 
// File operations
// Read file        readFile()
// Read file sync   readFileSync()
// Write file       writeFile()
// Write sync       writeFileSync()
// Append           appendFile()
// Create folder    mkdir()
// Read folder      readdir()
// Delete file      unlink()
// Rename           rename()
// Check existence  existsSync()
