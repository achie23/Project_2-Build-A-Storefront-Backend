"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const cors_1 = __importDefault(require("cors"));
const body_parser_1 = __importDefault(require("body-parser"));
const routes_1 = __importDefault(require("./routes"));
const app = (0, express_1.default)();
const port = 3000;
const address = '0.0.0.0:3000';
const corsOptions = {
    origin: 'http://localhost:3000',
    optionSuccessStatus: 200,
};
app.use((0, cors_1.default)(corsOptions));
app.use(body_parser_1.default.json());
app.use('/api', (0, cors_1.default)(corsOptions), routes_1.default);
app.listen(port, () => {
    console.log(`starting app on: ${address}`);
    console.log(`Starting server at http://localhost:${port}`);
});
