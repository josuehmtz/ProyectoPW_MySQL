"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const usersControllers_1 = __importDefault(require("../controllers/usersControllers"));
class usersRoutes {
    constructor() {
        this.router = express_1.Router();
        this.config();
    }
    config() {
        this.router.get('/', usersControllers_1.default.list);
        this.router.get('/:id', usersControllers_1.default.getOne);
        this.router.post('/', usersControllers_1.default.create);
        this.router.delete('/:id', usersControllers_1.default.delete);
        this.router.put('/:id', usersControllers_1.default.update);
        this.router.post('/signin', usersControllers_1.default.signin);
        this.router.post('/validar', usersControllers_1.default.validar);
        this.router.post('/verify', usersControllers_1.default.verifyToken);
    }
}
const UsersRoutes = new usersRoutes();
exports.default = UsersRoutes.router;
