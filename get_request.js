const bodyParser = require('body-parser');
var express = require('express');
var app = express();

// var students = require("students");


app.get('/', function (req, res) {
    console.log(req.body)
    //res.json(students);
})


app.listen(6000,()=>{
    console.log("server running....")
}); 
    