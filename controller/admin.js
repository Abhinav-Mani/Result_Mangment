module.exports.GET_HOME=(req,res)=>{
    res.render("dashboard",{title:"ADMIN"});
}

module.exports.GET_COURSES=(req,res)=>{
    res.render("courses",{title:"Admin"});
}

module.exports.GET_ADD_COURSE=(req,res)=>{
    return res.send("add book get");
    res.render("courses",{title:"Admin"});
}

module.exports.POST_ADD_COURSES=(req,res)=>{
    return res.send("add book post");
    res.render("courses",{title:"Admin"});
}