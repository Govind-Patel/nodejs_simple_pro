// const http = require('http');
// // const url = require('url');
// const fs = require('fs');
// const server = http.createServer((req,res) =>{
//     console.log(req.url="/contact");
//     if(req.url="/"){
//         res.end("this is a home page");
//     }else if(req.url="/about"){
//         res.end("this is a about page");
//     }else if(req.url="/contact"){
//         res.end("this is a contact page");
//     }else{
//         res.send("404 error page ");
//     }
// });

const { on } = require("nodemon");

// server.listen(4000,()=>{
//     console.log('server create');
// });

// const biodata = {
//     name :"Govind",
//     email:"ga@gmai.com",
//     password:123456,
//     age:22
// }

// console.log(biodata.name);
// const jsonData = JSON.stringify(biodata);
// console.log(jsonData);
// fs.writeFile("jsonfile.json",jsonData,(err) => {
//     console.log("done");
// });

// fs.readFile("jsonfile.json","utf-8",(err,data) =>{
//     const orgData = JSON.parse(data);
//     console.log(data);
//     console.log(orgData);

// });


// event use 

const EventEmiter = require('events');
const event = new EventEmiter();

event.on("sayMy",()=>{
    console.log("Hello");
});
event.emit("sayMay");