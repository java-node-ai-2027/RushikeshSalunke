import http from "http";

//more implementation 
import { MongoClient } from "mongodb";

const emp = [
    { id: 10, name: "priti", age: 29 },
    { id: 20, name: "pawan", age: 33 }     
];

const server = http.createServer((req, res) => {
    res.setHeader("Content-Type", "application/json");

    if (req.url === "/emp"  && req.method === "GET") {
        res.statusCode = 200;
        res.end(JSON.stringify(emp));
    }
    if (req.url === "/emp"  &&  req.method === "POST" ) {
        let body = "";
        req.on("data", (chunk) => {
            body += chunk;
        });

        req.on("end", () => {
            try {
                const empp = JSON.parse(body);
                empp.id = emp.length+1;
                emp.push(empp);
                res.statusCode = 201;
                res.end(JSON.stringify(empp));
            } catch (error) {
                res.statusCode = 400;
                res.end(JSON.stringify({ msg: "Invalid JSON format" }));
            }
           } );
        return;
    }

    res.statusCode =  404;
    res.end(JSON.stringify(
        {
           msg: "undefined route vro"
        }));
});

server.listen(3000,() => {
    console.log("server is on port 3000");
});