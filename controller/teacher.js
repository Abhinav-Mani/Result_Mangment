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

module.exports.GET_STUDENT_MARKS_ENTRY=(req,res)=>{
    showMarksEntryForm()
    async function showMarksEntryForm(){
        const code =  req.params.code;
        let a=[]
        for(let i=0;i<8;i++){
            a.push(code);
        }
        const [students,extra]=await pool.query("select rollno from cousrechoice where subject1=? OR subject2=? OR subject3=? OR subject4=? OR subject5=? OR subject6=? OR subject7=? OR subject8=?",a);
        res.render("marksentry",{title:"Teacher",students:students});
    }
}