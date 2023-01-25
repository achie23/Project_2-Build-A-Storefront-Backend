"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.DashboardQueries = void 0;
const database_1 = __importDefault(require("../database"));
class DashboardQueries {
    // Get all products that have been included in orders
    async productsInOrders() {
        try {
            const connection = await database_1.default.connect();
            const sql = 'SELECT name, price, order_id FROM products INNER JOIN order_products ON products.id = order_products.id';
            const result = await connection.query(sql);
            connection.release();
            return result.rows;
        }
        catch (error) {
            throw new Error(`unable get products and orders: ${error}`);
        }
    }
    // Get all users that have made orders
    async usersWithOrders() {
        try {
            const connection = await database_1.default.connect();
            const sql = 'SELECT firstName, lastName FROM users INNER JOIN orders ON users.id = orders.user_id';
            const result = await connection.query(sql);
            connection.release();
            return result.rows;
        }
        catch (error) {
            throw new Error(`unable get users with orders: ${error}`);
        }
    }
    // Get five most expensive orders
    async fiveMostExpensive() {
        try {
            const connection = await database_1.default.connect();
            const sql = 'SELECT name, price FROM products ORDER BY price DESC LIMIT 5';
            const result = await connection.query(sql);
            connection.release();
            return result.rows;
        }
        catch (error) {
            throw new Error(`unable get products by price: ${error}`);
        }
    }
}
exports.DashboardQueries = DashboardQueries;
