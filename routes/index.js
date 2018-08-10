var express = require("express");
var router = express.Router();
var bcrypt = require("bcryptjs");
var path = require("path");
var passport = require("passport");
var LocalStrategy = require("passport-local").Strategy;
var expressValidator = require('express-validator');
var db = require("../models");
// const connection = require('../db/db');


//Get login page
router.get('/', function (req, res) {

    res.redirect('/login')
});

router.get('/login', function (req, res) {
    res.sendFile(path.join(__dirname, "../public/login.html"));
})

router.post('/login', passport.authenticate('local', 
{
    successRedirect: '/register',
    failureRedirect: '/login'
}));

//Get register page
router.get('/register', function (req, res) {
    res.sendFile(path.join(__dirname, "../public/createprofile.html"));
});

//Post register page
router.post('/register', function (req, res, next) {

    bcrypt.genSalt(10, function (err, salt) {
        bcrypt.hash(req.body.password, salt, function (err, hash) {
            var newUser = {
                "name": req.body.name,
                "email": req.body.email,
                "password": hash
            }
            db.User.create(newUser).then(function (error, dbUser) {
                if (error) {
                    res.sendFile(path.join(__dirname, "../public/login.html"));
                } else {
                    console.log("Registration Complete.")
                }
            })
        });
    });

});


module.exports = router;