const fs = require('fs');

// fs.writeFile('read.txt','today is awesome ay',(err) => {
//     console.log('file is created ');
// })

// fs.appendFile('read.txt',' please like and comment' ,(err) => {
//     console.log('task completed');
// })

fs.readFile('read.txt',"utf-8",(err,data) =>{
    console.log(data);
})