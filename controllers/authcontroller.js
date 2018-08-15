var exports = module.exports = {}
 
exports.createprofile = function(req, res) {
    res.render('createprofile');
}

exports.login = function(req, res) { 
    res.render('login'); 
}

exports.addproduct = function(req, res) { 
    res.render('addproduct'); 
}

exports.logout = function(req, res) { 
    req.session.destroy(function(err) { 
        res.redirect('/'); 
    });
 
}