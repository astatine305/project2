// Dependencies ??
// =============================================================

// Sequelize (capital) references the standard library
var Sequelize = require("sequelize");
// sequelize (lowercase) references connection to the DB
var sequelize = require("../config/connection.js");

// Creates a "Product" model that matches up with DB
var Product = sequelize.define("product", {
  product_name: {
    type: Sequelize.STRING
  },
  product_desc: {
    type: Sequelize.TEXT
  },
  liked: {
    type: Sequelize.BOOLEAN
  }
}, {
  timestamps: true
});

// Syncs with DB
product_db.sync();

// Makes the Products Model available for other files (will also create a table)
module.exports = Product;