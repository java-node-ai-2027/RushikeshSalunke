import db from "./db.js";
// const users = db.collection("users");
// await users.insertMany([
//     {
//       name: "Rahul",
//       age: 22
//     },
//     {
//         name: "priti",
//         age : 26
//     }
// ]);
// console.log("User inserted!");
// const data = await users.find().toArray();
//console.log(data);

console.log("------------------------------------------------------------------------");
const users = db.collection("users");
await users.deleteMany({
    name : "Rahul"
});


const u1 = db.collection("users");
await u1.findOne({
    name : "priti"
});
 
const u2 = db.collection("users");
await u2.insertMany([
    {name : "kalyani", age : 22 },
    {name : "kirti" , age : 26}
]);
console.log(u2);





