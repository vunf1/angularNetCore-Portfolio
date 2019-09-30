"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const Koa = require("koa");
const StaticFiles = require("koa-static");
const BodyParser = require("koa-bodyparser");
const app_routes_1 = require("./app.routes");
const CLIENT_FILES = './dev/client/';
const SERVER = new Koa();
// middlewares
SERVER.use(BodyParser());
SERVER.use(StaticFiles(CLIENT_FILES));
SERVER.use(app_routes_1.default.routes());
SERVER.listen(3000);
//# sourceMappingURL=app.js.map