"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ProductHandler = void 0;
const product_1 = require("../models/product");
const store = new product_1.ProductStore();
// Product handler class
class ProductHandler {
    // show all products
    async index(_req, res) {
        const products = await store.index();
        res.json(products);
    }
    // show a product with a specific id
    async show(_req, res) {
        const product = await store.show(_req.params.id);
        res.json(product);
    }
    // create a new product
    async create(req, res) {
        const product = {
            id: req.body.id,
            name: req.body.name,
            price: req.body.price,
            category: req.body.category,
        };
        try {
            const newProduct = await store.create(product);
            res.status(200);
            res.json(newProduct);
        }
        catch (error) {
            res.status(400);
            res.json(error);
        }
    }
    // get list of products sorter by category
    async getProductsByCategory(_req, res) {
        const getProductsByCategory = await store.getProductsByCategory();
        res.status(200);
        res.json(getProductsByCategory);
    }
}
exports.ProductHandler = ProductHandler;
