import express from 'express';
import { ProductHandler } from '../../handlers/productHandler';

const products = express.Router();
const store = new ProductHandler();

products.get('/index', store.index);
products.get('/show-products/:id', store.show);
products.post('/create-products', store.create);
products.get('/products-by-category', store.getProductsByCategory);

export default products;
