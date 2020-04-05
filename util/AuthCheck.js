module.exports.IS_AUTH=(req,res,next)=>{
    if(!req.session.username){
        res.redirect("/");
    }else{
        next();
    }
}

module.exports.IS_ADMIN=(req,res,next)=>{
    if(!req.session.username||req.session.role!=='admin'){
        res.redirect("/login/admin");
    }else{
        next();
    }
}

module.exports.IS_STUDENT=(req,res,next)=>{
    if(!req.session.username||req.session.role!=='student'){
        res.redirect("/login");
    }else{
        next();
    }
}

module.exports.IS_TEACHER=(req,res,next)=>{
    if(!req.session.username||req.session.role!=='teacher'){
        res.redirect("/login/teacher");
    }else{
        next();
    }
}