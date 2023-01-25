"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.DashboardHandler = void 0;
const dashboard_1 = require("../services/dashboard");
const dashboard = new dashboard_1.DashboardQueries();
class DashboardHandler {
    async productsInOrders(_req, res) {
        const products = await dashboard.productsInOrders();
        res.status(200);
        res.json(products);
    }
    async usersWithOrders(_req, res) {
        const users = await dashboard.usersWithOrders();
        res.status(200);
        res.json(users);
    }
    async fiveMostExpensive(_req, res) {
        const fiveMostExpensive = await dashboard.fiveMostExpensive();
        res.status(200);
        res.json(fiveMostExpensive);
    }
}
exports.DashboardHandler = DashboardHandler;
exports.default = DashboardHandler;
