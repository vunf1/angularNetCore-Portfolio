"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : new P(function (resolve) { resolve(result.value); }).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
Object.defineProperty(exports, "__esModule", { value: true });
const Router = require("koa-router");
const fs = require("fs");
const ROUTER = new Router();
const LOAD_HTML = function () {
    /**
    * LEITURA DE FILES
    * AJAX REQUEST DATA
    */
    return new Promise(function (resolve, reject) {
        fs.readFile('./dev/client/index.html', { 'encoding': 'utf8' }, function (err, data) {
            if (err)
                return reject(err);
            resolve(data);
        });
    });
};
ROUTER.get(/^\/(.*)(?:\/|$)/, (ctx, next) => __awaiter(this, void 0, void 0, function* () {
    if (ctx.request.url.startsWith("/api")) {
        return next();
    }
    else {
        this.body = yield LOAD_HTML();
    }
}));
exports.default = ROUTER;
//# sourceMappingURL=app.routes.js.map