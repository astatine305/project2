var express = require("express");
var router = express.Router();
var bcrypt = require("bcryptjs");
const saltRounds = 10;
var path = require("path");
var passport = require("passport");
var LocalStrategy = require("passport-local").Strategy;
var expressValidator = require('express-validator');
var db = require("../models");
const db2 = require("../db/db.js");

// const connection = require('../db/db');


//Redirect to login page
router.get('/', function (req, res) {
    res.redirect('/login');
});
// Serve login page
router.get('/login', function (req, res) {
    res.sendFile(path.join(__dirname, "../public/login.html"));
});


// POST login
router.post('/login', passport.authenticate('local', 
{
    successRedirect: '/products/add',
    failureRedirect: '/login'
}));

// GET logout
router.get('/logout', function (req, res) {
    req.logout();
    req.session.destroy();
    res.redirect('/login');
});

//GET register page
router.get('/register', function (req, res) {
    res.sendFile(path.join(__dirname, "../public/createprofile.html"));
});


// POST to register page
router.post('/register', function (req, res, next) {
    var today = Date();
    bcrypt.hash(req.body.password, saltRounds, function (err, hash) {
        var user = {
            'name': req.body.name,
            'email': req.body.email,
            'password': hash,
            'createdAt': today,
            'updatedAt': today
        }

        db2.query('INSERT INTO users SET ?', user, function (error, results, fields) {
            if (error) {
                console.log(error); // add code to notify user email exists
                res.redirect('/register');
            } else {
                db2.query('SELECT LAST_INSERT_ID() as user_id', function(error, results, fields) {
                    if (error) throw error;  
                    const user_id = results[0]
                    console.log("my id: " +results[0]);
                    req.login(user_id, function(err) {
                        res.redirect('/products/add')
                        
                    });
                })   
            }
        });
    });
});

passport.serializeUser(function(user_id, done) {
    done(null, user_id);
});

passport.deserializeUser(function(user_id, done) {
    done(null, user_id);
});


// //Post register page
// router.post('/register', function (req, res, next) {
//     bcrypt.genSalt(10, function (err, salt) {
//         bcrypt.hash(req.body.password, salt, function (err, hash) {
//             var newUser = {
//                 "name": req.body.name,
//                 "email": req.body.email,
//                 // "password": hash
//             }
//             db.User.create(newUser).then(function (error, dbUser) {
//                 if (error) {
//                     res.sendFile(path.join(__dirname, "../public/login.html"));
//                 } else {
//                     console.log("Registration Complete.")
//                 }
//             })
//         });
//     });

// });


module.exports = router;