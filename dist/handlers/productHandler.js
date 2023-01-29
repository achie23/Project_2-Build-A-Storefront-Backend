"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ProductHandler = void 0;
const product_1 = require("../models/product");
const store = new product_1.ProductStore();
// Product handler class
class ProductHandler {
    // show all products
    async index(_req, res) {
        try {
            const products = await store.index();
            res.json(products);
        }
        catch (error) {
            res.status(400);
            res.json(error);
        }
    }
    // show a product with a specific id
    async show(_req, res) {
        try {
            const product = await store.show(_req.params.id);
            res.json(product);
        }
        catch (error) {
            res.status(400);
            res.json(error);
        }
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
        try {
            const getProductsByCategory = await store.getProductsByCategory();
            res.status(200);
            res.json(getProductsByCategory);
        }
        catch (error) {
            res.status(400);
            res.json(error);
        }
    }
}
exports.ProductHandler = ProductHandler;
