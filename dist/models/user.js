"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.UserModel = void 0;
const database_1 = __importDefault(require("../database"));
const dotenv_1 = __importDefault(require("dotenv"));
const bcrypt_1 = __importDefault(require("bcrypt"));
dotenv_1.default.config();
const pepper = process.env.BCRYPT_PASSWORD;
const saltRounds = process.env.SALT_ROUNDS;
// User model class
class UserModel {
    // users index api endpoint model
    async index() {
        try {
            const connection = await database_1.default.connect();
            const sql = 'SELECT * FROM users';
            const result = await connection.query(sql);
            connection.release();
            return result.rows;
        }
        catch (error) {
            throw new Error(`Cannot get users. Error: ${error}`);
        }
    }
    // show users api endpoint model
    async show(id) {
        try {
            const connection = await database_1.default.connect();
            const sql = 'SELECT * FROM users WHERE id=($1)';
            const result = await connection.query(sql, [id]);
            const user = result.rows[0];
            connection.release();
            return user;
        }
        catch (error) {
            throw new Error(`Cannot show user. Error: ${error}`);
        }
    }
    // create user api endpoint model
    async create(user) {
        const { firstname, lastname, password } = user;
        try {
            const connection = await database_1.default.connect();
            const sql = 'INSERT INTO users (firstName, lastName, password) VALUES ($1, $2, $3) RETURNING *';
            const hash = bcrypt_1.default.hashSync(password + pepper, parseInt(saltRounds));
            const result = await connection.query(sql, [firstname, lastname, hash]);
            const user = result.rows[0];
            connection.release();
            return [user];
        }
        catch (error) {
            throw new Error(`Cannot add user. Error: ${error}`);
        }
    }
}
exports.UserModel = UserModel;
