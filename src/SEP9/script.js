// import express from "express";
// import { Long } from "mongodb";

// const app = express();
// app.get('/'(req,res) => {
// res.send('hellpo from the express')
// });

// app.listen(3000,()=>{
//     console.log(" it is working on a 3000 port");
// })


import express from 'express';

const app = express()
app.get('/', (req, res) => {
  res.send('Hello World bhavaa')
})
app.listen(3000, () => {
  console.log('Server is running on http://localhost:3000')
})