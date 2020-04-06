const pool = require("../util/database")

module.exports.GET_HOME=(req,res)=>{
    res.render("dashboard",{title:"ADMIN"});
}

module.exports.GET_COURSES=(req,res)=>{   
    getcourse();
    async function getcourse(){
        try{
            const [courses,extra1] = await pool.query("SELECT * FROM course");
            console.log(courses);
            res.render("courses",{title:"Admin",courses:courses});
        }catch(err){
            res.send({error:err});
        }
    }
}

module.exports.GET_ADD_COURSE=(req,res)=>{
    addcourseform();
    async function addcourseform(){
        try{
            const [branches,extra1] = await pool.query("SELECT name FROM branch");
            const [teachers ,extra2] = await pool.query("SELECT username FROM users where role='teacher'");
            res.render("addcourses",{title:"Admin",branches:branches,teachers:teachers});
        }catch(err){
            res.send({error:err});
        }
    }
    
}

module.exports.POST_ADD_COURSES=(req,res)=>{
    console.log(req.body);
    let data=req.body;
    if(data.type=="Compalsory")
        data.type=1;
    else
        data.type=2;
    var a=[data.code,data.coursename,data.semester,data.type,data.teacher,data.credit,data.branch];
    console.log(a);
    pool.query("insert into course  SELECT ? ,?,?, branch.code,?,?,? from branch WHERE branch.name=?",a)
    .then(result=>res.redirect("/admin/courses"));
}

module.exports.GET_DEPARTMENT=(req,res)=>{   
    getdepartment();
    async function getdepartment(){
        try{
            const [departments ,extra1] = await pool.query("SELECT * FROM branch");
            console.log(departments);
            res.render("departments",{title:"Admin",departments:departments});
        }catch(err){
            res.send({error:err});
        }
    }
}


module.exports.GET_ADD_DEPARTMENT=(req,res)=>{
    adddepartmentform();
    async function adddepartmentform(){
        try{
            res.render("adddepartment",{title:"Admin"});
        }catch(err){
            res.send({error:err});
        }
    }
    
}

module.exports.POST_ADD_DEPARTMENT=(req,res)=>{
    console.log(req.body);
    let data=req.body;
    var a=[data.coursename,data.code];
    console.log(a);
    pool.query("insert into branch values(?,?);",a)
    .then(result=>res.redirect("/admin/departments"));
}


module.exports.GET_TEACHERS=(req,res)=>{   
    getdepartment();
    async function getdepartment(){
        try{
            const [teachers ,extra1] = await pool.query("select * from teacher");
            console.log(teachers);
            res.render("teachers",{title:"Admin",teachers:teachers});
        }catch(err){
            res.send({error:err});
        }
    }
}


module.exports.GET_ADD_DEPARTMENT=(req,res)=>{
    adddepartmentform();
    async function adddepartmentform(){
        try{
            res.render("adddepartment",{title:"Admin"});
        }catch(err){
            res.send({error:err});
        }
    }
    
}

module.exports.POST_ADD_DEPARTMENT=(req,res)=>{
    console.log(req.body);
    let data=req.body;
    var a=[data.coursename,data.code];
    console.log(a);
    pool.query("insert into branch values(?,?);",a)
    .then(result=>res.redirect("/admin/departments"));
}
