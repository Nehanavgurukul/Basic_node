const http = require("http");

const server = http.createServer((req, res) => {
    res.end("Hello everyone, how you all  .... ");
});


server.listen(8000 , ()=>{
    console.log("listening to port no 3000")
})


