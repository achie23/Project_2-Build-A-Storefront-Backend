"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.ProductStore = void 0;
const database_1 = __importDefault(require("../database"));
// Product model class
class ProductStore {
    // products index api endpoint model
    async index() {
        try {
            const connection = await database_1.default.connect();
            const sql = 'SELECT * FROM products';
            const result = await connection.query(sql);
            connection.release();
            return result.rows;
        }
        catch (error) {
            throw new Error(`Unable to get products: ${error}`);
        }
    }
    // show products api endpoint model
    async show(id) {
        try {
            const sql = 'SELECT * FROM products WHERE id=($1)';
            const connection = await database_1.default.connect();
            const result = await connection.query(sql, [id]);
            const product = result.rows[0];
            connection.release();
            console.log('Read product data:', product);
            return product;
        }
        catch (error) {
            throw new Error(`Cannot show product, ${id}. Error: ${error}`);
        }
    }
    // create product api endpoint model
    async create(data) {
        const { name, price, category } = data;
        try {
            const connection = await database_1.default.connect();
            const sql = 'INSERT INTO products (name, price, category) VALUES ($1, $2, $3) RETURNING *';
            const result = await connection.query(sql, [name, price, category]);
            const product = result.rows[0];
            connection.release();
            return product;
        }
        catch (error) {
            throw new Error(`Unable to add product, ${name}: ${error}`);
        }
    }
    // Get all products by category
    async getProductsByCategory() {
        try {
            const connection = await database_1.default.connect();
            const sql = 'SELECT * FROM products ORDER BY category ASC';
            const result = await connection.query(sql);
            connection.release();
            return result.rows;
        }
        catch (error) {
            throw new Error(`Unable get products by category: ${error}`);
        }
    }
}
exports.ProductStore = ProductStore;
