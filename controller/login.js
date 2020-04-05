const pool = require("../util/database");

module.exports.GET_STUDENT_LOGIN=(req,res)=>{
    res.render("studentlogin",{title:"Student Login"});
}

module.exports.GET_TEACHER_LOGIN=(req,res)=>{
    res.render("teacherlogin",{title:"Teacher Login"});
}

module.exports.GET_ADMIN_LOGIN=(req,res)=>{
    res.render("adminlogin",{title:"Admin Login"});
}

module.exports.POST_STUDENT_LOGIN=(req,res)=>{

    pool.query("select * from test;")
    .then(result=>{
        const [value,extra]=result;
        console.log(value);
        res.send(value);
    }).catch(err=>{
        res.send(err);
    })
   
}

module.exports.POST_TEACHER_LOGIN=(req,res)=>{
    res.send("login");
}

module.exports.POST_ADMIN_LOGIN=(req,res)=>{
    res.send("login");
}