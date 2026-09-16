// import http from "node:http";
// if (req.url === "/users" && req.method === "POST") {

//     let body = "";

//     req.on("data", chunk => {
//         body += chunk;
//     });
//     req.on("end", () => {
//         const user = JSON.parse(body);

//         users.push(user);

//         res.statusCode = 201;
//         res.setHeader("Content-Type", "application/json");

//         res.end(JSON.stringify(user));

//     });
// }

//


import http from "node:http";
const users = [];
let body = []


const server = http.createServer((req, res) => {
    if (req.url === "/users" && req.method === "POST") {
        req.on("data", (chunk) => {
            body += chunk;
        });
        req.on("end", () => {
            const user = JSON.parse(body);
            users.push(user);
            res.statusCode = 201;
            res.end(JSON.stringify(user));
        });
    }
    else {
        res.statusCode = 404;
        res.end("Route not found");
    }
});

server.listen(3000, () => {

    console.log("Server running  http://localhost:3000");
});

