const express = require('express');
const mongooge = require('mongoose');
const passport = require('passport');
const con = require('./config');
var parseUrl = require('body-parser');

let app = express();
let encodeUrl = parseUrl.urlencoded({ extended: false });

app.set('view engine','ejs');
app.use(express.json());

app.get("/",(req,resp) =>{
    resp.render("home");
});
app.get("/login",(req,resp) => {
    resp.render('login');
});
app.get("/register",(req,resp)=>{
    console.log()
    resp.render('register');
});
app.post('/register',(req,resp) =>{
    console.log('govind');
    // console.log(req.body);
    resp.send(req.body.name);
})

app.listen(3000);