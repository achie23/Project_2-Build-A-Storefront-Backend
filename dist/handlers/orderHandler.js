"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.OrderHandler = void 0;
const order_1 = require("../models/order");
const store = new order_1.OrderStore();
// Order handler class
class OrderHandler {
    // show all orders
    async index(_req, res) {
        try {
            const orders = await store.index();
            res.json(orders);
        }
        catch (error) {
            res.status(400);
            res.json(error);
        }
    }
    // show an order with a specific id
    async show(_req, res) {
        try {
            const order = await store.show(_req.params.id);
            res.json(order);
        }
        catch (error) {
            res.status(400);
            res.json(error);
        }
    }
    // create a new order
    async create(_req, res) {
        const order = {
            product_id: _req.body.product_id,
            quantity: _req.body.quantity,
            user_id: _req.body.user_id,
            status: _req.body.status,
        };
        try {
            const newOrder = await store.create(order);
            res.status(200);
            res.json(newOrder);
        }
        catch (error) {
            res.status(400);
            res.json(error);
        }
    }
    // get a current/active order by a user
    async activeOrder(req, res) {
        try {
            const active_order = await store.activeOrder(req.params.user_id);
            res.status(200);
            res.json(active_order);
        }
        catch (error) {
            res.status(400);
            res.json(error);
        }
    }
    // get a completed order by a user
    async completedOrder(req, res) {
        try {
            const completed_order = await store.completedOrder(req.params.user_id);
            res.status(200);
            res.json(completed_order);
        }
        catch (error) {
            res.status(400);
            res.json(error);
        }
    }
}
exports.OrderHandler = OrderHandler;
