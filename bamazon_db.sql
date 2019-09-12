DROP DATABASE IF EXISTS bamazon_db;
CREATE database bamazon_db;

USE bamazon_db;

CREATE TABLE products (
  item_id INT NOT NULL,
  product_name VARCHAR(100) NULL,
  department_name VARCHAR(100) NULL,
  stock_quantity INT NULL,
  price DECIMAL(10,4) NULL,
  PRIMARY KEY (item_id)
);

SELECT * FROM products;
