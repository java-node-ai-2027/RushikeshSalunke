console.log("hello node.js nd welcome to 2026  ");

// //const password = "MySecretPassword123";
// DB_PASSWORD=MySecretPassword123
// console.log(process.env.DB_PASSWORD);

// const http = require("http");
// const server = http.createServer((req, res) => {
//     res.end("Hello from Node.js");
// });
// server.listen(3000);

// console.log("1");

// setTimeout(() => {
//     console.log("2 bcoz the async ");
// }, 2000);

// console.log("3");


// async function getUsers() {
//     const response = await fetch(
//         "https://jsonplaceholder.typicode.com/users"
//     );
//     const users = await response.json();
//     console.log(users);
// }
// getUsers();

// const user = {
//     name: "Rushi",
//     age: 25
// };
// const json = JSON.stringify(user);
// console.log(json);

// let user2 = {
//     name :"priti",
//     age : 26
// };
// let json2 = JSON.stringify(user2);
// console.log(json2);

// const json = '{"name":"Rushi","age":25}';
// const user = JSON.parse(json);
// console.log(user.name);

// let json3 = `{"name":"shruti","age":26}`;
// const user2 = JSON.parse(json3);
// console.log(user2);
// console.log(user2.age);



async function getUser(){
    try {
        const url = process.env.API_URL;
        console.log(url);
        
       //  const url = "https://jsonplaceholder.typicode.com/users";
        const response = await fetch(url);
        if(!response.status){
            throw new Error(`HTTP Error is  :${response.status}`);

        }

        const users = await response.json();
        console.log("user is received bro");
        users.forEach(user => {
            console.log(user.id,user.name);
        });
    } catch (error) {
        console.log("failed to fetch user ");
    }
}

getUser();








