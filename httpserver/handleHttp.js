const http = require("http");

const server = http.createServer((req, res) => {
    if(req.url = "/about"){
        res.end("Hello everyone, how you all  .... ");
    }else if(req.url = "/"){
        res.end("Hello About us sides ...  .... ");
    }else if (req.url = "/contact"){
        res.end("Hello contact us sides.... ");
    }else{
        res.writeHead("")
        res.end("404 error. file not  exit...")
    }
});

server.listen(8000 , ()=>{
    console.log("listening to port no 3000")
})

