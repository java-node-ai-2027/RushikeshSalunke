import http from "http";
//const http = require("http");
let users = [
    { id: 1, name: "rushi" },
    { id: 2, name: "om" },
    { id: 3, name: "Rushika" }
];

const server = http.createServer((req, res) => {
    if (req.method === "DELETE" && req.url === "/users/1") {
        users = users.filter(user => user.id !== 1);
        res.writeHead(200, {
            "Content-Type": "application/json"
        });
        res.end(JSON.stringify(users));
    }
});
server.listen(3000, () => {
    console.log("Server start port 3000");
});