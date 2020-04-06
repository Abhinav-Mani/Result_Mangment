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
//     SELECT "CS101" ,"dbms","1", branch.code,
// "1","cse001","3" 
// from branch WHERE branch.name="Computer Science and Enginnering"
    // id varchar(10) primary key,
    // name varchar(255) not null,
    // semester varchar(2) not null,
    // branch varchar(10) not null,
    // type int(1) not null,
    // teacher varchar(255),
    // credit int(1) not null,
    if(data.type=="Compalsory")
        data.type=1;
    else
        data.type=2;
    var a=[data.code,data.coursename,data.semester,data.type,data.teacher,data.credit,data.branch];
    console.log(a);
    pool.query("insert into course  SELECT ? ,?,?, branch.code,?,?,? from branch WHERE branch.name=?",a)
    .then(result=>res.redirect("/admin/courses/new"));
}