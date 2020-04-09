const pool=require("../util/database");

module.exports.GET_HOME=(req,res)=>{
    showTeacherSubject();
    async function showTeacherSubject(){
        try{
            let teacher=req.session.username;
            const [courses,extra]=await pool.query("select * from course where teacher = ?",[teacher]);
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
        res.render("marksentry",{title:"Teacher",students:students,code:code});
    }
}

module.exports.POST_STUDENT_MARKS_ENTRY=(req,res)=>{
    //res.send(req.body);
    let data=req.body;
    addData(data);
    async function addData(data){
        try{
            let code=req.params.code;
            let length= data.name.length;
            for(let i=0;i<length;i++){
                a=[data.name[i],code,data.mid[i],data.inter[i],data.end[i]];
                //INSERT INTO marks VALUES("2018ugcs010","CS001",30,20,50)
                await pool.query("INSERT INTO marks VALUES(?,?,?,?,?)",a);
            
            }
            res.redirect("/teacher");
        }catch(err){

        }
    }
}