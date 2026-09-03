// Promise

var ans = new Promise((resolve, reject) => {
    var n = Math.floor(Math.random() * 10);

    if (n < 5) {
        return resolve();
    } else {
        return reject();
    }
});

ans.then(function () {
    console.log("below");
})
.catch(function () {
    console.log("above");
});


// Random number

var m = Math.floor(Math.random() * 100);

console.log(m);


// Figlet

import figlet from "figlet";

async function doStuff() {
    const text = await figlet.text("!!");
    console.log(text);
}

doStuff();

async function dosome() {
    let text = await figlet.text("Rushikesh");
    console.log(text);
}

dosome();


// Express

import express from "express";

let app = express();

app.get("/", (req, res) => {
    res.send("congrats server is ready priti");
});

app.get("/contact", (req, res) => {
    res.send("congrats server is ready in contacts section");
});

app.get("/profile", (req, res) => {
    res.send("congrats server is ready and getting profile info");
});

app.listen(3000, () => {
    console.log("server is running on localhost 3000");
});


// Async

let start = "mahi";

console.log(start);

setTimeout(() => {
    console.log("waiting for 3 second for shruti");
}, 3000);

let end = "priti";

console.log(end);










//=---------------output


/*


PS C:\Users\ADMIN\Desktop\Thinkitive\learning\RushikeshSalunke\src> node script.js
64
mahi
priti
below
server is running on localhost 3000
  _ _ 
 | | |
 | | |
 |_|_|
 (_|_)
      
  ____            _     _ _             _     
 |  _ \ _   _ ___| |__ (_) | _____  ___| |__  
 | |_) | | | / __| '_ \| | |/ / _ \/ __| '_ \ 
 |  _ <| |_| \__ \ | | | |   <  __/\__ \ | | |
 |_| \_\\__,_|___/_| |_|_|_|\_\___||___/_| |_|
                                              
waiting for 3 second for shruti
server is running on localhost 3000

*/
