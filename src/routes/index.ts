import * as express from 'express';
import users from './api/users';
import orders from './api/orders';
import products from './api/products';

const routes = express.Router();

routes.use('/products', products);
routes.use('/users', users);
routes.use('/orders', orders);

export default routes;
