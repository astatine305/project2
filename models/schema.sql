

DROP DATABASE IF EXISTS product_db;

CREATE DATABASE product_db;

USE product_db;

CREATE TABLE products (
   id Int AUTO_INCREMENT NOT NULL,
   product_name VARCHAR(140) NOT NULL,
   description VARCHAR(140),
   location VARCHAR(140) NOT NULL,
   liked BOOLEAN DEFAULT false
);


CREATE TABLE user (
   id Int AUTO_INCREMENT NOT NULL,
   user VARCHAR(140) NOT NULL,
   password VARCHAR(140) NOT NULL
);

