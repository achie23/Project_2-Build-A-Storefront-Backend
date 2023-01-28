// import dependencies
import { Request, Response } from 'express';
import { Product, ProductStore } from '../models/product';

const store = new ProductStore();

// Product handler class
export class ProductHandler {
  // show all products
  async index(_req: Request, res: Response) {
    try {
      const products = await store.index();
      res.json(products);
    } catch (error) {
      res.status(400);
      res.json(error);
    }
  }
  // show a product with a specific id
  async show(_req: Request, res: Response) {
    try {
      const product = await store.show(_req.params.id);
      res.json(product);
    } catch (error) {
      res.status(400);
      res.json(error);
    }
  }
  // create a new product
  async create(req: Request, res: Response) {
    const product: Product = {
      id: req.body.id,
      name: req.body.name,
      price: req.body.price,
      category: req.body.category,
    };
    try {
      const newProduct = await store.create(product);
      res.status(200);
      res.json(newProduct);
    } catch (error) {
      res.status(400);
      res.json(error);
    }
  }
  // get list of products sorter by category
  async getProductsByCategory(_req: Request, res: Response) {
    try {
      const getProductsByCategory = await store.getProductsByCategory();
      res.status(200);
      res.json(getProductsByCategory);
    } catch (error) {
      res.status(400);
      res.json(error);
    }
  }
}
