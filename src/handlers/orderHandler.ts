// import dependencies
import { Request, Response } from 'express';
import { Order, OrderStore } from '../models/order';

const store = new OrderStore();

// Order handler class
export class OrderHandler {
  // show all orders
  async index(_req: Request, res: Response) {
    const orders = await store.index();
    res.json(orders);
  }
  // show an order with a specific id
  async show(_req: Request, res: Response) {
    const order = await store.show(_req.params.id);
    res.json(order);
  }
  // create a new order
  async create(_req: Request, res: Response) {
    const order: Order = {
      product_id: _req.body.product_id,
      quantity: _req.body.quantity,
      user_id: _req.body.user_id,
      status: _req.body.status,
    };
    try {
      const newOrder = await store.create(order);
      res.status(200);
      res.json(newOrder);
    } catch (error) {
      res.status(400);
      res.json(error);
    }
  }
  // get a current/active order by a user
  async activeOrder(req: Request, res: Response) {
    const active_order = await store.activeOrder(req.params.user_id);
    res.status(200);
    res.json(active_order);
  }
  // get a completed order by a user
  async completedOrder(req: Request, res: Response) {
    const completed_order = await store.completedOrder(req.params.user_id);
    res.status(200);
    res.json(completed_order);
  }
}
