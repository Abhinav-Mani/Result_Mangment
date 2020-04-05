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

    const username= req.body.username;
    const password= req.body.password;
    const role= "student"
    pool.query("SELECT * FROM users WHERE `username` = ? AND `password` = ? AND `role`= ?",[username,password,role])
    .then(result=>{
        const [value,extra]=result;
        if(value.length>0){
            req.session.username=username;
        }
        res.send(value);
    }).catch(err=>{
        res.send(err);
    })
   
}

module.exports.POST_TEACHER_LOGIN=(req,res)=>{
    
    const username= req.body.username;
    const password= req.body.password;
    const role= "teacher"
    pool.query("SELECT * FROM users WHERE `username` = ? AND `password` = ? AND `role`= ?",[username,password,role])
    .then(result=>{
        const [value,extra]=result;
        if(value.length>0){
            req.session.username=username;
        }
        res.send(value);
    }).catch(err=>{
        res.send(err);
    })
   
}

module.exports.POST_ADMIN_LOGIN=(req,res)=>{
    
    const username= req.body.username;
    const password= req.body.password;
    const role= "admin"
    pool.query("SELECT * FROM users WHERE `username` = ? AND `password` = ? AND `role`= ?",[username,password,role])
    .then(result=>{
        const [value,extra]=result;
        if(value.length>0){
            req.session.username=username;
        }
        res.send(value);
    }).catch(err=>{
        res.send(err);
    })
   

}