const pool = require("../util/database")

module.exports.GET_HOME=(req,res)=>{
    res.render("dashboard",{title:"ADMIN"});
}

module.exports.GET_COURSES=(req,res)=>{
    res.render("courses",{title:"Admin"});
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
    return res.send("add book post");
    res.render("courses",{title:"Admin"});
}