DROP DATABASE IF EXISTS product_db;
CREATE DATABASE product_db;

USE product_db;

CREATE TABLE products (
    id INT NOT NULL AUTO_INCREMENT, 
    product_name VARCHAR(255) NOT NULL,
    product_desc TEXT CHARACTER SET binary NOT NULL,
    liked BOOLEAN DEFAULT true,
    PRIMARY KEY (id)
);