"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const dotenv_1 = __importDefault(require("dotenv"));
const jsonwebtoken_1 = __importDefault(require("jsonwebtoken"));
dotenv_1.default.config();
const tokenSecret = process.env.TOKEN_SECRET;
// Verify authorization token
const verifyAuthToken = (req, res) => {
    try {
        const authorizationHeader = req.headers['authorization'];
        const token = authorizationHeader.split(' ')[1];
        jsonwebtoken_1.default.verify(token, tokenSecret);
    }
    catch (error) {
        res.status(401);
        res.json(`Access denied, invalid token ${error}`);
    }
};
exports.default = verifyAuthToken;
