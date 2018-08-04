DROP DATABASE IF EXISTS test_db;
CREATE DATABASE test_db;

USE test_db;

CREATE TABLE users(
id int(11) NOT NULL AUTO_INCREMENT,
email varchar(255) NOT NULL, 
password varchar(255) NOT NULL, 
created_at datetime NOT NULL, 
updated_at datetime NOT NULL, 
PRIMARY KEY (id)) 
ENGINE=InnoDB AUTO_INCREMENT=8 DEFAULT CHARSET=latin1

CREATE TABLE products(
id int(11) NOT NULL AUTO_INCREMENT,
product_name varchar(255) NOT NULL,
product_desc varchar(255) NOT NULL,
preference BOOLEAN NOT NULL,
rating int,
created_at datetime NOT NULL, 
updated_at datetime NOT NULL, 
PRIMARY KEY (id))
