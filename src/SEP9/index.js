import express from "express";


const app = express();

app.use(express.json());
app.use(express.urlencoded({ extend : true }));

app.get("/",function(req,res){
    console.log("wdkwklfjrf");

    res.send("get response sending.......");
});

app.listen((3000,function(){
    console.log("server is working on a port no. 3000");
}))


