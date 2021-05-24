const  path = require('path');

console.log(path.dirname('/Desktop/Node_JS/PathModule/Path.js'));     // to know directory 

console.log(path.extname('/Desktop/Node_JS/PathModule/Path.js'));     // to know extention 

console.log(path.basename('/Desktop/Node_JS/PathModule/Path.js'));    // to know file name 

const MyPath = path.parse('/Desktop/Node_JS/PathModule/Path.js');     // to know whole path

console.log(MyPath.root);                                             // to know root                                            
console.log(MyPath.dir);                                              // to know directory
console.log(MyPath.base);                                             // to know file name
console.log(MyPath.name);                                             // to know path
console.log(MyPath.ext);                                              // to know extention



