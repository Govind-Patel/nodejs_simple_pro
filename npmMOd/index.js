// const chalk = require("chalk");
const validator = require('validator');

// console.log(chalk.blue.underline('hello word'));
// console.log(chalk.blue.underline.inverse('hello word'));
// console.log(chalk.green.underline.inverse('Success'));

const res = validator.isEmail('govind');
console.log(res);