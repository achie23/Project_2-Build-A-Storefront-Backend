import express from 'express';
import { OrderHandler } from '../../handlers/orderHandler';

const orders = express.Router();
const store = new OrderHandler();

orders.get('/index', store.index);
orders.get('/show-orders/:id', store.show);
orders.post('/create-orders', store.create);
orders.get('/active-orders/:user_id', store.activeOrder);
orders.get('/completed-orders/:user_id', store.completedOrder);

export default orders;
