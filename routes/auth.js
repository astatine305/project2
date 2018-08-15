var authController = require('../controllers/authcontroller.js');
 
module.exports = function(app, passport) {
    app.get('/createprofile', authController.createprofile);   
    app.get('/login', authController.login);
    app.post('/createprofile', passport.authenticate('local-createprofile', {
        successRedirect: '/addproduct', 
        failureRedirect: '/createprofile'
    } 
));

    app.get('/addproduct',isLoggedIn, authController.addproduct);   
    app.get('/logout',authController.logout);
    app.post('/login', passport.authenticate('local-login', {
        successRedirect: '/addproduct',
        failureRedirect: '/login'
    } 
));

function isLoggedIn(req, res, next) { 
    if (req.isAuthenticated())    
        return next();        
    res.redirect('/login'); 
}
 
}
