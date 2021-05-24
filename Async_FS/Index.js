//  CRUD  Operation with Async  fs .......

// Create a Folder and then a File ...
// Read  the File ...
// Updata the data ...
// Rename the File name...
// Delete the both folder and file ...


const fs = require('fs');

// fs.mkdir("My_folder",(err)=>{
//     console.log("creating a folder....")
// })


// fs.writeFile("My_folder/My_file.txt","Here i m trying to create a new  file and into it want to store some data.",(err)=>{
//     console.log("Storing some data ....")
// })
// console.log("show data  ....")


// fs.readFile("My_folder/My_file.txt" , 'utf-8' , (err,data) =>{
//     console.log(data);
// })


// fs.appendFile("My_folder/My_file.txt","here appending some data in my file.",()=>{
//     console.log("appending somethings......")
// });


// fs.rename("My_folder/My_file.txt","My_folder/Your_file.txt" ,()=>{
//     console.log("rename file .....")
// })


// fs.unlink("My_folder/Your_file.txt",(err)=>{
//     console.log("deleting file....")
// })


// fs.rmdir("My_folder",(err)=>{
//     console.log("removing folder.....");
// });