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
            //console.log(teachers);
            res.render("teachers",{title:"Admin",teachers:teachers});
        }catch(err){
            res.send({error:err});
        }
    }
}


module.exports.GET_ADD_TEACHER=(req,res)=>{
    addteacherform();
    async function addteacherform(){
        try{
            const [branches,extra1] = await pool.query("SELECT name FROM branch");
            res.render("addteacher",{title:"Admin",branches:branches});
        }catch(err){
            res.send({error:err});
        }
    }
    
}

module.exports.POST_ADD_TEACHER=(req,res)=>{
    addteacher(req.body);
    async function addteacher(data){
        try{
            let a=[data.branch];
            const [code,extra1] = await pool.query("SELECT code from branch where name=?",a);
            let courseCode=code[0];
            courseCode=courseCode.code;
            a=[code[0].code+"%"];
            const [count,extra2]= await pool.query("select count(*) as count from users where username LIKE ? and role='teacher' ",a);
            let TEACHERCOUNT=count[0].count+1;
            let newcode=courseCode+String(TEACHERCOUNT).padStart('3',0);
            let name = data.name;
            await pool.query("INSERT INTO users VALUES (?,'password123','teacher')",[newcode]);
            await pool.query("INSERT INTO teacher VALUE(?,?)",[name,newcode]);
            res.redirect("/admin/teachers");
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

module.exports.GET_STUDENTS_DEPARMENT=(req,res)=>{   
    getdepartment();
    async function getdepartment(){
        try{
            const [departments ,extra1] = await pool.query("SELECT * FROM branch");
            console.log(departments);
            res.render("studentdepartment",{title:"Admin",departments:departments});
        }catch(err){
            res.send({error:err});
        }
    }
}

module.exports.GET_STUDENTS=(req,res)=>{   
    let id=req.params.code;
    getstudent(id);
    async function getstudent(id){
        try{
            const [students ,extra1] = await pool.query("select * from student where branch=?",[id]);
            res.render("students",{title:"Admin",students:students,id:id});
        }catch(err){
            res.send({error:err});
        }
    }
}

module.exports.GET_ADD_STUDENTS=(req,res)=>{   
    let id=req.params.code;
    addstudentform(id);
    async function addstudentform(id){
        try{
            const [branch,extra1] = await pool.query("SELECT * FROM branch where code=?",[id]);
            console.log(branch);
            res.render("addstudent",{title:"Admin",branch:branch});
        }catch(err){
            res.send({error:err});
        }
    }
}

module.exports.POST_ADD_STUDENTS=(req,res)=>{   
    let id=req.params.code;
    let data=req.body;
    console.log(data);
    addstudent(id,data);
    async function addstudent(id,data){
        try{
            let rollno=data.rollno;
            let branch=id;
            let semester=data.semester;
            let name=data.name;
            let email=data.email;
            let year=data.year;
            await pool.query("INSERT INTO users VALUE(?,'password123','student')",[rollno]);
            await pool.query("INSERT INTO student VALUES(?,?,?,?,?,?)",[rollno,branch,semester,name,email,year]);
            res.redirect("/admin/student/CSE")
        }catch(err){
            res.send({error:err});
        }
    }
}