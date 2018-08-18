var express = require("express");
var router = express.Router();
var passport = require("passport");
var LocalStrategy = require("passport-local").Strategy;
var path = require("path");
var db = require("../models");
var path = require("path");
var bcrypt = require("bcryptjs");
const db2 = require("../db/db.js");
var exphbs = require('express-handlebars');


// GET add product
router.get('/add', authenticationMiddleware(), function (req, res) {
    console.log(req.user);
    console.log(req.isAuthenticated());
    res.render('addproduct');
    // res.sendFile(path.join(__dirname, "../public/addproduct.html"));
});


// GET likes
router.get('/likes', authenticationMiddleware(), function (req, res) {
    var id = req.user.user_id;
    var liked = 'liked';
    db2.query('SELECT * FROM products WHERE UserId = ? AND preference = ?', [id, liked], function (error, results, fields) {
        if (error) {
            console.log(error); // add code to notify user email exists   
        } 
        if (results.length !== 0) {
            console.log(results);
            
        }
        res.render('liked', {products: JSON.stringify(results)});


        // else {

            
        //     // console.log(JSON.stringify(results));
        //     console.log(results.length);
        //     // res.send(JSON.stringify(results));
        //     // res.render('liked', {body: results[0].product_name});
        //     // res.sendFile(path.join(__dirname, "../public/liked.html"));
        //     res.render('liked');
        // }
    });
});

// GET dislikes
router.get('/dislikes', authenticationMiddleware(), function (req, res) {

    var id = req.user.user_id
    db2.query('SELECT * FROM products WHERE UserId = ' + id + ' AND preference = ' + "'disliked'", function (error, results, fields) {
        if (error) {
            console.log(error); // add code to notify user email exists   
        } else {
            console.log(results);
            res.sendFile(path.join(__dirname, "../public/liked.html"));
            console.log('Likes display'); 
        }
    });
});


//POST add product
router.post('/add', authenticationMiddleware(), function (req, res, next) {
    var today = Date();
    var id = req.user.user_id

    var product = {
        'product_name': req.body.product_name,
        'product_desc': req.body.product_desc,
        'preference': req.body.preference,
        'rating': req.body.rating,
        'createdAt': today,
        'updatedAt': today,
        'UserId': id
    }
    db2.query('INSERT INTO products SET ?', product, function (error, results, fields) {
        if (error) {
            console.log(error);
        } else {
            res.redirect('/products/add');
            console.log('Item added'); 
        }
    });
    console.log(req.isAuthenticated());
    // res.sendFile(path.join(__dirname, "../public/addproduct.html"));
});


function authenticationMiddleware() {
    return (req, res, next) => {
            if (req.isAuthenticated()) return next();
            res.redirect('/login');
    }
}


module.exports = router;