CREATE DATABASE bamazon_DB;
USE bamazon_DB;

CREATE TABLE products(
item_id INT NOT NULL,
product_name VARCHAR(100) NULL, 
deparment_name VARCHAR(100) NULL,
price DECIMAL(10,2) NULL,
stock_quantity INT NULL,
PRIMARY KEY (position)
);

SELECT * FROM bamazon_products;