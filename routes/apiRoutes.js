// apiRoutes.js offers a set of routes for displaying and saving data to product_db

// requiring our models
var db = require("../models");

// Routes
module.exports = function (app) {
  // Get route for getting all of the products
  app.get("/api/products", function (req, res) {
    // findAll returns all entries for a table when used with no options
    db.products.findAll({}).then(function (product_db) {
      // we access the products as an argument inside the callback function
      res.json(product_db);
    });
  });

  // post route for saving the products
  app.post("/api/examples", function (req, res) {
    // passing the object with a product_name, description, location, and liked property
    db.Products.create({
      product_name: req.body.product_name,
      description: req.body.description,
      location: req.body.location,
      liked: req.body.liked
    }).then(function (product_db) {
      // We have access to the new products as an argument inside of the callback function
      res.json(product_db);
    });
  });

  // Delete route for deleting products. We can get the id of the products to be deleted from req.params.id
  app.delete("/api/examples/:id", function (req, res) {
    // We just have to specify which products we want to destroy with
    db.products.destroy({
      where: {
        id: req.params.id
      }
    }).then(function (product_db) {
      res.json(product_db);
    });
  });

  // put route for updating products.  We should be able to get the products data from req.body
  app.put("/api/products", function (req, res) {
    // Update takes in products object describing the properties we want to update
    // Use where to describe which objects we want to update
    db.products.update({
      product_name: req.body.product_name,
      description: req.body.description,
      location: req.body.location,
      liked: req.body.liked
    }, {
        where: {
          id: req.body.id
        }
      }).then(function (product_db) {
        res.json(product_db);
      });
  });
};