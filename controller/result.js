const pool=require("../util/database");

module.exports.RESULT=(req,res)=>{
    let data = req.session;
    showResults(data)
    async function showResults(data){
        try{
            let rollno = data.username;
            const [student,extra1] =await pool.query("SELECT * FROM student WHERE rollno=?",[rollno]);
            const [marks  ,extra2] =await pool.query("select * from marks natural join course where code=?",[rollno]);
            console.log(student[0]);
            res.render("results",{title:"RESULT",student:student[0],marks:marks});
        }catch(err){
            res.send(err);
        }
    }
    //res.send("Results");
}