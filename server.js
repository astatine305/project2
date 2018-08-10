require("dotenv").config();
var path = require("path");
var cookieParser = require("cookie-parser");
var expressValidator = require("express-validator");
var flash = require("connect-flash");
var session = require("express-session");
var MySQLStore = require("express-mysql-session")(session);
var passport = require("passport");
var LocalStrategy = require("passport-local").Strategy;
var express = require("express");
var bodyParser = require("body-parser");
var bcrypt = require('bcryptjs');

// Init App
var app = express();


var PORT = process.env.PORT || 5000;

// Requiring our models for syncing
var db = require("./models");
var connection = require('./db/db');


// Sets up the Express app to handle data parsing

// Define Routes
var index = require('./routes/index');
var users = require('./routes/users');
var products = require('./routes/products');


// Middleware
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());
app.use(cookieParser());
app.use(expressValidator());

// Static directory
app.use(express.static(__dirname + "/public"));


var options ={
    host: process.env.DB_HOST,
    user: process.env.DB_USER,
    password: process.env.DB_PASSWORD,
    database: process.env.DB_NAME
};

var sessionStore = new MySQLStore(options);
// Express Session
app.use(session({  
  secret: 'mysecret',
  saveUninitialized: false,
  resave: false,
  store: sessionStore,
  // cookie: {secure: true}
}));

// Passport init
app.use(passport.initialize());
app.use(passport.session());

// Connect Flash
app.use(flash());

// Routes
app.use('/', index);
app.use('/users', users);
app.use('/products', products);

passport.use(new LocalStrategy({
  usernameField: 'email',
  passwordField: 'password',
  session: true
}, function (username, password, done) {
  console.log(username);
  console.log(password);

// connection.query('SELECT password FROM users WHERE email = ?', [username], function(err, results, fields) {
//     if (err) {done(err)};
//     if (results.length === 0) {
//       done(null, false);
//     }
//     console.log(results[0].password.toString());
//     var hash = results[0].password.toString();
//     bcrypt.compare(password, hash, function(err, response) {
//       if (response === true) {
//         return done(null, {email: username});
//       } else {
//         return done(null, false);
//       }

//     });

//     return done(null, 'sefesfe');
//   })

}));



// Routes
// =============================================================
// require("./routes/html-routes.js")(app);
// require("./routes/user-api-routes.js")(app);
// require("./routes/product-api-routes.js")(app);

// Syncing our sequelize models and then starting our Express app
// =============================================================
db.sequelize.sync({ force: false }).then(function () {
  app.listen(PORT, function () {
    console.log("App listening on PORT " + PORT);
  });
});
