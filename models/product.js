var orm = require("../config/orm.js");

var product = {
  all: function(cb) {
    orm.all("products", function(res) {
      cb(res);
    });
  },
  create: function(name, cb) {
    orm.create("products", [
      "product_name", "product_desc", "liked"
    ], [
      name, false
    ], cb);
  },
  update: function(id, cb) {
    var condition = "id=" + id;
    orm.update("products", {
      liked: true
    }, condition, cb);
  }
};

module.exports = product;