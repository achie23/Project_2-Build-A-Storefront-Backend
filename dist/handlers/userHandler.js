"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.UserHandler = void 0;
const user_1 = require("../models/user");
const jsonwebtoken_1 = __importDefault(require("jsonwebtoken"));
const userMethods = new user_1.UserModel();
const tokenSecret = process.env.TOKEN_SECRET;
// Order handler class
class UserHandler {
    // show all users
    async index(_req, res) {
        try {
            const users = await userMethods.index();
            res.json(users);
        }
        catch (error) {
            res.status(400);
            res.json(error);
        }
    }
    // show a user with a specific id
    async show(_req, res) {
        try {
            const user = await userMethods.show(_req.params.id);
            res.status(200);
            res.json(user);
        }
        catch (error) {
            res.status(400);
            res.json(error);
        }
    }
    // create a new user
    async create(req, res) {
        const user = {
            id: req.body.id,
            firstname: req.body.firstname,
            lastname: req.body.lastname,
            password: req.body.password,
        };
        try {
            const newUser = await userMethods.create(user);
            // eslint-disable-next-line prefer-const
            let token = jsonwebtoken_1.default.sign({ user: newUser }, tokenSecret);
            res.status(200);
            res.json(token);
        }
        catch (error) {
            res.status(400);
            res.json(error);
        }
    }
}
exports.UserHandler = UserHandler;
