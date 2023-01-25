"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const orderHandler_1 = require("../../handlers/orderHandler");
const orders = express_1.default.Router();
const store = new orderHandler_1.OrderHandler();
orders.get('/index', store.index);
orders.get('/show-orders/:id', store.show);
orders.post('/create-orders', store.create);
orders.get('/active-orders/:user_id', store.activeOrder);
orders.get('/completed-orders/:user_id', store.completedOrder);
exports.default = orders;
