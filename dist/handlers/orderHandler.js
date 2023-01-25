"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.OrderHandler = void 0;
const order_1 = require("../models/order");
const store = new order_1.OrderStore();
// Order handler class
class OrderHandler {
    // show all orders
    async index(_req, res) {
        const orders = await store.index();
        res.json(orders);
    }
    // show an order with a specific id
    async show(_req, res) {
        const order = await store.show(_req.params.id);
        res.json(order);
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
        const active_order = await store.activeOrder(req.params.user_id);
        res.status(200);
        res.json(active_order);
    }
    // get a completed order by a user
    async completedOrder(req, res) {
        const completed_order = await store.completedOrder(req.params.user_id);
        res.status(200);
        res.json(completed_order);
    }
}
exports.OrderHandler = OrderHandler;
