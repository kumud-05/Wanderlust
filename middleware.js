module.exports.isLoggedIn=(req,res,next)=>{
    if(!req.isAuthenticated()){
        req.session.redirectedUrl=req.originalUrl;
        req.flash("error","you must be logged in to create listing!");
        return res.redirect("/login");
    }
    next();
};

module.exports.savedRedirectedUrl = (req,res,next)=>{
    if(req.session.redirectedUrl){
        res.locals.redirectedUrl = req.session.redirectedUrl;
    }
    next();
};
