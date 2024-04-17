const mongooge = require('mongoose');
const userSchema = new mongooge.schema({
    name:String,
    password:String
});