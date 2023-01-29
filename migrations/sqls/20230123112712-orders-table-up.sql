CREATE TABLE orders (
    id SERIAL PRIMARY KEY,
    product_id bigint REFERENCES products(id),
    quantity integer,
    user_id bigint REFERENCES users(id),
    status VARCHAR(64)
);

INSERT INTO orders (product_id, quantity, user_id, status) VALUES ('1', 25, '1', 'active');