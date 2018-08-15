//  Imports
var express = require('express');
var app = express();
var passport   = require('passport');
var session    = require('express-session');
var bodyParser = require('body-parser');
var env = require('dotenv').load();
var exphbs = require('express-handlebars');

var PORT = process.env.PORT || 5000;

// Requiring our models for syncing
var db = require("./models");

//For BodyParser
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

// For Passport 
app.use(session({ secret: 'keyboard cat',resave: true, saveUninitialized:true})); // session secret
app.use(passport.initialize());
app.use(passport.session()); // persistent login sessions

//For Handlebars
app.set('views', './views')
app.engine('hbs', exphbs({
    extname: '.hbs'
}));
app.set('view engine', '.hbs');

// Static directory
app.use(express.static("public"));

// =============================================================
//HBS Routes
var authRoute = require('./routes/auth.js')(app, passport);
require("./routes/apiRoutes.js")(app);
require("./routes/htmlRoutes.js")(app);

// Route for Index 
app.get('/', function(req, res) { 
    res.sendFile(path.join(__dirname, "/login"));
 
});
 
 //Models
var models = require("./models");

//load passport strategies
require('./config/passport/passport.js')(passport, models.user);
 
//Sync Database
db.sequelize.sync({ force: false }).then(function() { 
    console.log('Nice! Database looks fine') 
}).catch(function(err) { 
    console.log(err, "Something went wrong with the Database Update!") 
});

app.listen(PORT, function() { 
    if (!err)
        console.log("App listening on PORT " + PORT);
    else console.log(err) 
});
