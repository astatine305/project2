### Schema

CREATE DATABASE product_db;
USE product_db;

CREATE TABLE products
(
	id int NOT NULL AUTO_INCREMENT,
	product_name VARCHAR(255) NOT NULL,
	product_desc TEXT NOT NULL,
	liked BOOLEAN DEFAULT true,
	PRIMARY KEY (id)
);