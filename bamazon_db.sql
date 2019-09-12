DROP DATABASE IF EXISTS bamazon_db;
CREATE database bamazon_db;

USE bamazon_db;

CREATE TABLE products (
  item_id INT NOT NULL AUTO_INCREMENT,
  product_name VARCHAR(100) NULL,
  department_name VARCHAR(100) NULL,
  stock_quantity INT NULL,
  price DECIMAL(10,2) NULL,
  PRIMARY KEY (item_id)
);

INSERT INTO products (product_name , department_name, stock_quantity, price)
VALUES ("apple", "grocery" ,100 ,1.00);

INSERT INTO products (product_name , department_name, stock_quantity, price)
VALUES ("milk", "grocery" ,50 ,3.99);

INSERT INTO products (product_name , department_name, stock_quantity, price)
VALUES ("chicken breast", "grocery" ,50 ,2.99);

INSERT INTO products (product_name , department_name, stock_quantity, price)
VALUES ("flank steak", "grocery" ,50 ,4.00);

INSERT INTO products (product_name , department_name, stock_quantity, price)
VALUES ("dozen of eggs", "grocery" ,60 ,2.99);

INSERT INTO products (product_name , department_name, stock_quantity, price)
VALUES ("brioche bread", "grocery" ,20 ,1.99);

INSERT INTO products (product_name , department_name, stock_quantity, price)
VALUES ("chocolate chip cookies", "grocery" ,50 ,3.50);

INSERT INTO products (product_name , department_name, stock_quantity, price)
VALUES ("coca cola", "grocery" ,100 ,1.99);

INSERT INTO products (product_name , department_name, stock_quantity, price)
VALUES ("kale", "grocery" ,100 ,2.00);

INSERT INTO products (product_name , department_name, stock_quantity, price)
VALUES ("garlic", "grocery" ,150 ,0.99);
