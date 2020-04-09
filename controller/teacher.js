const pool=require("../util/database");

module.exports.GET_HOME=(req,res)=>{
    showTeacherSubject();
    async function showTeacherSubject(){
        try{
            let teacher=req.session.username;
            const [courses,extra]=await pool.query("select * from course where teacher = 'CSE004'",[teacher]);
            res.render("teacherHome",{title:"TEACHER",courses:courses});
        }catch(err){
            res.send(err);
        }
    }
}