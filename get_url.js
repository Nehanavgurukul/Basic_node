const express = require("express");
const app = express();
// const http = require ("http");
const bodyParser = require("body-parser");

app.get("/get", function (req,res){
    res.send("welcome to my page 88888888...")
});


app.post("/update", function (req,res){
  res.send("i'm not devloper...")
});

app.put("/put", function (req,res){
  res.send("i m neha yadav contact on this no ...")
});


app.delete("/delete", function (req,res){
  res.send("i m neha yadav contact on this no ...")
});


app.listen(3805, function (req, res){
  console.log("server is running at port no 8000 ")
});