import http from "http";
let user = {
    id: 101,
    name: "shruti",
    age: 23
};
const server = http.createServer((req, res) => {
    if (req.method === "PATCH" && req.url === "/users/101") {
        user.name = "Rushi";
       res.end(JSON.stringify(user));
    }
});
server.listen(3001, () => {
    console.log("Server started on3001 bro ");
});

