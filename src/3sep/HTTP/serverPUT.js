import http from "http";
const server = http.createServer((req, res) => {
    if (req.method === "PUT") {
        res.end("Hello from GET request");
    }
});
server.listen(8000, () => {
    console.log("Server started on port 8000");
});

const http = require("http");


//---------------------------------------------------------------------------------------------

const server2 = http.createServer((req,res)=>{
    if(req.method === "PUT"){
        res.end("hello from get appeal ") 
    }else{
        res.end("wrong requeest ");
    }
});

server2.listen(3000,() => {
    console.log("serverstarted at a port 3000")
});




//============================================================================
let users = [
    { id: 1, name: "rahul" },
    { id: 2, name: "priti" }
];

const server3 = http.createServer((req, res) => {

    if (req.method === "PUT" && req.url === "/users/1") {

        users[0].name = "Rushi";

        res.writeHead(200, {
            "Content-Type": "application/json"
        });

        res.end(JSON.stringify(users[0]));
    }

});

server3.listen(8000, () => {
    console.log("Server started on port 8000");
});


