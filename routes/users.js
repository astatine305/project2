var express = require("express");
var router = express.Router();
var path = require("path");
var bcrypt = require("bcryptjs");
var db = require("../models");
var passport = require("passport");
var LocalStrategy = require("passport-local").Strategy;

//Resgister
// router.get('/register', function (req, res) {
//     res.sendFile(path.join(__dirname, "../public/createprofile.html"));
// });

//Index
// router.get('/', function (req, res) {
//     res.sendFile(path.join(__dirname, "../public/login.html"));
// });

//Login page
// router.get('/login', function (req, res) {
//     res.sendFile(path.join(__dirname, "../public/login.html"));
// });


// Register user
// router.post('/register', function (req, res) {
//     bcrypt.genSalt(10, function (err, salt) {
//         bcrypt.hash(req.body.password, salt, function (err, hash) {
//             var newUser = {
//                 "name": req.body.name,
//                 "email": req.body.email,
//                 "password": hash
//             }
//             db.User.create(newUser).then(function(error, dbUser) {
//                 if (error) {
//                     res.sendFile(path.join(__dirname, "../public/login.html"));
//                 } else {
//                     res.json({
//                         meassage: "Registration complete!"
//                     })
//                 }
//             })
//         });
//     });
// });




// passport.serializeUser(function(user, done) {
// done(null, user.id);
// });

// passport.deserializeUser(function(id, done) {
//     User.getUserById(id, function(err, user) {
//         done(err, user)
//     })
// })


module.exports = router;

