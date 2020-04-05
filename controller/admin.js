module.exports.GET_HOME=(req,res)=>{
    res.render("dashboard",{title:"ADMIN"});
}

module.exports.GET_COURSES=(req,res)=>{
    res.render("courses",{title:"Admin"});
}