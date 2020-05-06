-- CREATE TABLE users(
--     user_id SERIAL PRIMARY KEY,
--     email VARCHAR(50),
--     password TEXT NOT NULL
-- )

-- CREATE TABLE products(
--     product_id SERIAL PRIMARY KEY,
--     name VARCHAR(20),
--     price MONEY,
--     product_img TEXT,
--     quantity INT
-- )

INSERT INTO products
(name, price, product_img, quantity)
VALUES
('product1', 10, 'na', 6);
