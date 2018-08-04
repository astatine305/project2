var db = require("../models");

module.exports = function(app) {
  // Load index page
  app.get("/", function(req, res) {
    db.Products.findAll({}).then(function(product_db) {
      res.render("index", {
        msg: "Welcome!",
        products: product_db
      });
    });
  });

  // Load example page and pass in an example by id
  app.get("/example/:id", function(req, res) {
    db.Products.findOne({ where: { id: req.params.id } }).then(function(product_db) {
      res.render("example", {
        products: product_db
      });
    });
  });

  // Render 404 page for any unmatched routes
  app.get("*", function(req, res) {
    res.render("404");
  });
};
