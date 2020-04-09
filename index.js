require("dotenv").config();

const express= require("express");
const app = express();
const path = require("path");
const bodyParser = require('body-parser');
const session = require("express-session");
const isAuth = require("./util/AuthCheck");


const homeRoute = require("./routes/home");
const loginRoute = require("./routes/login");
const logoutRoute = require("./routes/logout");
const adminRoute = require("./routes/admin");
const teacherRoute = require("./routes/teacher");
const resultRoute = require("./routes/result");

app.use(session({
    secret: process.env.SECRET,
    resave: false,
    saveUninitialized: true
}))



app.use(bodyParser.urlencoded({ extended: true }));
app.use(express.static(path.join(__dirname, 'public')));

app.use((req,res,next)=>{
    res.locals.username =req.session.username;
    res.locals.role = req.session.role;
    next();
})

app.set("view engine","ejs");



app.use("/",homeRoute);
app.use("/login",loginRoute);
app.use("/logout",logoutRoute);
app.use("/admin",isAuth.IS_ADMIN,adminRoute);
app.use("/teacher",isAuth.IS_TEACHER,teacherRoute);
app.use("/result",isAuth.IS_STUDENT,resultRoute);

app.get("/welcome",isAuth.IS_AUTH,(req,res)=>{
    res.send("authorised"+req.session.username);
})

app.listen(8000,()=>{
    console.log("listening at port"+process.env.PORT)
})