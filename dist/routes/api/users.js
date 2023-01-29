"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const userHandler_1 = require("../../handlers/userHandler");
const verifyToken_1 = __importDefault(require("../../middlewares/verifyToken"));
const users = express_1.default.Router();
const userMethods = new userHandler_1.UserHandler();
users.get('/index', verifyToken_1.default, userMethods.index);
users.get('/show-users/:id', verifyToken_1.default, userMethods.show);
users.post('/create-users', userMethods.create);
exports.default = users;
