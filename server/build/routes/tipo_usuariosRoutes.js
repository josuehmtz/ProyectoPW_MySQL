"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const tipo_usuariosControllers_1 = __importDefault(require("../controllers/tipo_usuariosControllers"));
class tipos_UsuariosRoutes {
    constructor() {
        this.router = express_1.Router();
        this.config();
    }
    config() {
        this.router.get('/', tipo_usuariosControllers_1.default.list);
    }
}
const Tipos_UsuariosRoutes = new tipos_UsuariosRoutes();
exports.default = Tipos_UsuariosRoutes.router;
