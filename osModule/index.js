// const os = require('os'); // os module
// const path = require('path'); //path module 
// const op = require('./op');
const {add,sum, sub} = require("./op");

//  const arch = os.arch();
//  const freemem = os.freemem();
// //  console.log(`${freemem/1024/1024/1024}`);
// const total = os.totalmem();
// // console.log(`${total/1024/1024/1024}`);
// console.log(os.hostname());
// console.log(os.platform());
// console.log(os.tmpdir());
// console.log(os.type());

// console.log(path.dirname('D:\Govind\Project\node\nodejs_project\osModule\index.js'));
// console.log(path.extname('D:\Govind\Project\node\nodejs_project\osModule\index.js'));
// console.log(path.basename('D:\Govind\Project\node\nodejs_project\osModule\index.js'));

// const pathNAme = path.parse('D:\Govind\Project\node\nodejs_project\osModule\index.js');
// console.log(pathNAme.root);
// console.log(pathNAme.dir);
// console.log(pathNAme.base);
// console.log(pathNAme.ext);
// console.log(pathNAme.name);

// console.log(op.add(10,5));
// console.log(op.sub(10,5));
console.log(add(10,10));
console.log(sub(10,5));