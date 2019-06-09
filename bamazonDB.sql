CREATE Database bamazon_DB;

USE bamazon_DB;

CREATE TABLE products (
ID INTEGER(11) AUTO_INCREMENT NOT NULL,
NAME VARCHAR(50),
QTY INTEGER(11),
DSCRPTN VARCHAR(500),
PRICE INTEGER(11),
PRIMARY KEY (ID)
);

INSERT INTO products (NAME, QTY, DSCRPTN, PRICE) VALUES ("Running Shoes", 10, "Black & white with red laces", 25);
INSERT INTO products (NAME, QTY, DSCRPTN, PRICE) VALUES ("Mechanical Pencil", 20, "Green Plastic, 0.5mm Lead", 1);
INSERT INTO products (NAME, QTY, DSCRPTN, PRICE) VALUES ("Baseball Cap", 5, "NY Yankees, Blue and white", 10);
INSERT INTO products (NAME, QTY, DSCRPTN, PRICE) VALUES ("Phone Case", 3, "Fits iPhone 7, red", 3);
INSERT INTO products (NAME, QTY, DSCRPTN, PRICE) VALUES ("Motor Oil", 5, "40oz, 10w30, Synthetic", 5);
INSERT INTO products (NAME, QTY, DSCRPTN, PRICE) VALUES ("Frizbee", 25, "Blue and white with generic company logo", 2);
INSERT INTO products (NAME, QTY, DSCRPTN, PRICE) VALUES ("Cables", 8, "Assortment of used cables found in box. Good Luck", 1);
INSERT INTO products (NAME, QTY, DSCRPTN, PRICE) VALUES ("Sunglasses", 15, "Looks fancy", 5);
INSERT INTO products (NAME, QTY, DSCRPTN, PRICE) VALUES ("E-Reader", 1, "Kindle-adjacent", 50);
INSERT INTO products (NAME, QTY, DSCRPTN, PRICE) VALUES ("Roller Blades", 1, "Size 10, black, remembers the 90's", 25);

SELECT * FROM products;