var express = require("express");

var router = express.Router();

// Import the model (product.js) to use its database functions.
var product = require("../models/product.js");

// Create all our routes and set up logic within those routes where required.
router.get("/", function(req, res) {
  product.all(function(data) {
    var hbsObject = {
      products: data
    };
    console.log(hbsObject);
    res.render("index", hbsObject);
  });
});

router.post("/api/products", function(req, res) {
  product.create(
    ["product_name", "product_desc", "liked"],
    [req.body.product_name, req.body.product_desc, req.body.liked],
    function(result) {
      // Send back the ID of the new quote
      res.json({ id: result.insertId });
    }
  );
});

router.put("/api/products/:id", function(req, res) {
  var condition = "id = " + req.params.id;

  console.log("condition", condition);

  product.update(
    {
      liked: req.body.liked
    },
    condition,
    function(result) {
      if (result.changedRows === 0) {
        // If no rows were changed, then the ID must not exist, so 404
        return res.status(404).end();
      } else {
        res.status(200).end();
      }
    }
  );
});

router.delete("/api/products/:id", function(req, res) {
  var condition = "id = " + req.params.id;

  product.delete(condition, function(result) {
    if (result.affectedRows === 0) {
      // If no rows were changed, then the ID must not exist, so 404
      return res.status(404).end();
    } else {
      res.status(200).end();
    }
  });
});

// Export routes for server.js to use.
module.exports = router;
