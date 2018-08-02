var express = require("express");
var router = express.Router();
var product = require("../models/product.js");

// get route -> index
router.get("/", function(req, res) {
  res.redirect("/products");
});

router.get("/products", function(req, res) {
  // express callback response by calling product.selectAllproduct
  product.all(function(productData) {
    // wrapper for orm.js that using MySQL query callback will return product_data, render to index with handlebar
    res.render("index", { product_data: productData });
  });
});

// post route -> back to index
router.post("/products/create", function(req, res) {
  // takes the request object using it as input for product.addproduct
  product.create(req.body.product_name, function(result) {
    // wrapper for orm.js that using MySQL insert callback will return a log to console,
    // render back to index with handle
    console.log(result);
    res.redirect("/");
  });
});

// put route -> back to index
router.put("/products/:id", function(req, res) {
  product.update(req.params.id, function(result) {
    // wrapper for orm.js that using MySQL update callback will return a log to console,
    // render back to index with handle
    console.log(result);
    // Send back response and let page reload from .then in Ajax
    res.sendStatus(200);
  });
});

module.exports = router;