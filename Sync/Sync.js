const fs = require('fs');

// fs.writeFileSync("sync.txt","Here is my Sync data and i m writting somethings here.....");

const data = fs.readFileSync("sync.txt", "utf8");
console.log(data);


    
    