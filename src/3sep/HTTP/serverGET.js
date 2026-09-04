// const http = require("http");
import http from "node:http";

const myserver = http.createServer((req, res) => {
    if (req.method === "GET") {
        res.end("Hello, this is a GET request");
    }
});
myserver.listen(8000, () => { console.log("Server started on port 8000");
});


//get o/p --->   node serverGET.js   -------->   Server started on port 8000
// -----------------------------------on my Ui i am able to see the on localhost --> hello from server

//==================================================================================================
import http from "node:http";
let users = [
    { id: 1, name: "Rahul" },
    { id: 2, name: "Amita" } ,
    { id : 3 , name: "priti"}
];

const server = http.createServer((req, res) => {
    if (req.url === "/users" || req.method === "GET") {
        res.setHeader("Content-Type", "application/json");
        res.end(JSON.stringify(users));
    }
});
server.listen(3000,()=>{
  console.log('server on ');
  
});

// output 
/*
[
  {
    "id": 1,
    "name": "Rahul"
  },
  {
    "id": 2,
    "name": "Amita"
  },
  {
    "id": 3,
    "name": "priti"
  }
] */








// import http from "node:http";

// const server1 = http.createServer((req, res) => {
//   if (req.method === "GET" && req.url === "/users") {
//     const users = [
//       { id: 1, name: "Rahul" },
//       { id: 2, name: "Amit" }
//     ];
//     res.writeHead(200, { "Content-Type": "application/json" });
//     res.end(JSON.stringify(users));
//   } else {
//     res.statusCode = 404;
//     res.end("Not Found");
//   }
// });

// server1.listen(3000, () => {
//   console.log("Server 1 running on http://localhost:3000");
// });