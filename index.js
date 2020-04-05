require("dotenv").config();

const express= require("express");
const app = express();
const path = require("path");
const bodyParser = require('body-parser');

app.use(bodyParser.urlencoded({ extended: true }));
app.use(express.static(path.join(__dirname, 'public')));

app.set("view engine","ejs");

const homeRoute = require("./routes/home");
const loginRoute = require("./routes/login")

app.use("/",homeRoute);
app.use("/login",loginRoute);

app.listen(8000,()=>{
    console.log("listening at port"+process.env.PORT)
})