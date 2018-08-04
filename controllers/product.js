var connection = require('../config/config');
var express=require("express");

module.exports.product=function(req,res){
    var today = new Date();
    var products={
        "product_name":req.body.product_name,
        "product_desc":req.body.product_desc,
        "preference":req.body.preference,
        "rating":req.body.rating,
        "created_at":today,
        "updated_at":today
    }
    connection.query('INSERT INTO products SET ?',products, function (error, results, fields) {
      if (error) {

        throw error;
        // res.json({
        //     status:false,
        //     message:'there are some error with query',
        // }) 
      }else{
        // alert("User registered sucessfully");

          res.json({
            status:true,
            data:results,
            message:'Product added'
        })
      }
    });
}