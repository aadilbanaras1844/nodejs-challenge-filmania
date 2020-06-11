

// for pages which require loggedIn to access
module.exports.requireLogin = function(req, res, next){
    if(req.session.email && req.session.email != '')
        return next();
    return res.redirect('/login'); 
}

// for pages which require logedOut to access
module.exports.requireLogOut = function(req, res, next){
    if(req.session.email && req.session.email != '')
        return res.redirect('/films'); 
    return next();
}

// Default middleware, to add user details if loggedIn 
module.exports.defaultMW = function(req, res, next){
    if(req.session.email){
        res.locals.email = req.session.email;
        res.locals.user_id = req.session.user_id;
    }
    else
        res.locals.email = '';

    return next();
}
