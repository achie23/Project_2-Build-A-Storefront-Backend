# API Requirements
The company stakeholders want to create an online storefront to showcase their great product ideas. Users need to be able to browse an index of all products, see the specifics of a single product, and add products to an order that they can view in a cart page. You have been tasked with building the API that will support this application, and your coworker is building the frontend.

These are the notes from a meeting with the frontend developer that describe what endpoints the API needs to supply, as well as data shapes the frontend and backend have agreed meet the requirements of the application. 

## API Endpoints
#### Products
- Index
-- AN INDEX route: '/api/products/index' [GET] 
- Show
-- A SHOW route: '/api/products/show-products/:id' [GET] 
- Create [token required]
-- A CREATE route: '/api/products/create-products' [POST] 
- [OPTIONAL] Top 5 most popular products 

- [OPTIONAL] Products by category (args: product category)
-- A PRODUCTS-BY-CATEGORY route: '/api/products/products-by-category' [GET] 

#### Users
- Index [token required]
-- AN INDEX route: '/api/users/index' [GET] 
- Show [token required]
-- A SHOW route: '/api/users/show-users/:id' [GET] 
- Create N[token required]
-- A CREATE route: '/api/users/create-users' [POST] 

#### Orders
-- AN INDEX route: '/api/orders/index' [GET]
-- A SHOW route: '/api/orders/show-orders/:id' [GET]
-- A CREATE route: '/api/orders/create-orders' [POST] 
- Current Order by user (args: user id)[token required]
-- A CURRENT-ORDER route: '/api/orders/active-orders/:user_id'' [GET] 
- [OPTIONAL] Completed Orders by user (args: user id)[token required]
-- A COMPLETED-ORDERS route: '/api/orders/completed-orders/:user_id'' [GET]

## Data Shapes
#### Product
-  id
- name
- price
- [OPTIONAL] category
--Table: products (id:serial primary key, name:varchar, price:integer, category:text)

#### User
- id
- firstName
- lastName
- password
--Table: users (id:serial primary key, firstname:varchar, firstname:varchar, password:varchar)

#### Orders
- id
- id of each product in the order
- quantity of each product in the order
- user_id
- status of order (active or complete)
--Table: orders (id:serial primary key, product_id:integer[foreign key to products table], quantity:integer, user_id:integer[foreign key to users table], status:varchar)
