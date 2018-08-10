var express = require("express");
var router = express.Router();
var path = require("path");
var db = require("../models");


// product
router.get('/add', function (req, res) {
    res.sendFile(path.join(__dirname, "../public/addproduct.html"));
});

module.exports = router;