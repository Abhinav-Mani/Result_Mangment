module.exports.GET_HOME=(req,res)=>{
    return res.send("your home");
    res.render("home",{title:"HOME"});
}