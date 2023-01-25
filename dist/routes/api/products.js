"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const productHandler_1 = require("../../handlers/productHandler");
const products = express_1.default.Router();
const store = new productHandler_1.ProductHandler();
products.get('/index', store.index);
products.get('/show-products/:id', store.show);
products.post('/create-products', store.create);
products.get('/products-by-category', store.getProductsByCategory);
exports.default = products;
