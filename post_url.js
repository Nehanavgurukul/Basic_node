const express = require("express");
const app = express();
const students = require("students");

app.get("/",function (req,res){
    res.send("this is first practice....");
})

app.post("/post",function (req,res){
    res.send("this is second practice....");
})

app.all("/test", function(req, res){
    res.send("HTTP method doesn't have any effect on this route!");
 });

app.listen(8000)   
    console.log("server is running on 8000 port")


