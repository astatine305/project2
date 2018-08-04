var express=require("express");
var bodyParser=require('body-parser');

var PORT = process.env.PORT || 8080; 
var connection = require('./config/config');
var app = express();
 
var authenticateController=require('./controllers/authenticate');
var registerController=require('./controllers/register');
var productController =require('./controllers/product');
 
app.use(bodyParser.urlencoded({extended:true}));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.get('/', function (req, res) {  
   res.sendFile( __dirname + "/" + "register.html" );  
})  
 
app.get('/login', function (req, res) {  
   res.sendFile( __dirname + "/" + "login.html" );  
})  

app.get('/product', function (req, res) {  
    res.sendFile( __dirname + "/" + "products.html" );  
 })  
 

/* route to handle product update */


/* route to handle login and registration */
app.post('/api/register',registerController.register);
app.post('/api/authenticate',authenticateController.authenticate);
app.post('/api/proudct',productController.product);
 
// console.log(authenticateController);
app.post('/controllers/register', registerController.register);
app.post('/controllers/authenticate', authenticateController.authenticate);
app.post('/controllers/product', productController.product);
// app.listen(8000);
app.listen(PORT, function() {
    console.log("App listening on PORT " + PORT);
  });
