module.exports.LOG_OUT = (req,res)=>{
    req.session.destroy();
    res.redirect("/");
}