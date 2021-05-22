"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.UsersController = void 0;
const database_1 = __importDefault(require("../database"));
const jwt = require('jsonwebtoken');
class usersController {
    constructor() {
        this.email = 'test@admin.com';
        this.password = '123';
    }
    list(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            yield database_1.default.query('SELECT * FROM usuarios', function (err, result, fields) {
                if (err)
                    throw err;
                res.json(result);
            });
        });
    }
    getOne(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            const { id } = req.params;
            yield database_1.default.query('SELECT * FROM usuarios where id_user = ?', [id], function (err, result, fields) {
                if (err)
                    throw err;
                if (result.length > 0) {
                    return res.json(result[0]);
                }
                res.status(404).json({ text: 'El usuario no ha sido encontrado' });
            });
        });
    }
    create(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            yield database_1.default.query('INSERT INTO usuarios set ?', [req.body]);
            console.log(req.body);
            res.json({ message: 'Usuario creado' });
        });
    }
    delete(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            const { id } = req.params;
            yield database_1.default.query('DELETE FROM usuarios WHERE id_user = ?', [id]);
            res.json({ text: 'Usuario eliminado con exito' });
        });
    }
    update(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            const { id } = req.params;
            yield database_1.default.query('UPDATE usuarios set ? WHERE id_user = ?', [req.body, id]);
            res.json({ message: 'Datos actualizados' });
        });
    }
    getUsuarios(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            yield database_1.default.query('SELECT * FROM usuarios', function (err, result, fields) {
                if (err)
                    throw err;
                res.json(result);
            });
        });
    }
    signin(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            const { email, password } = req.params;
            yield database_1.default.query('SELECT email,password FROM usuarios WHERE id_tipo_usuario = 1', [email, password], function (err, result, fields) {
                if (err)
                    throw err;
                if (result.length > 0) {
                    //return res.json(result[0]);
                    let data = JSON.stringify(result[0]);
                    const token = jwt.sign(data, 'admin');
                    res.json(token);
                }
                res.json('Usuario o clave incorrectos');
            });
        });
    }
    verifyToken(req, res, next) {
        return __awaiter(this, void 0, void 0, function* () {
            if (!req.headers.authorization)
                return res.status(401).json('No autorizado');
            const token = req.headers.authorization.substr(7);
            if (token !== '') {
                const content = jwt.verify(token, 'admin');
                req.params = content;
                console.log(req.params);
                next();
            }
            res.json('token vacio');
        });
    }
    validar(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            res.json('Informacion secreta');
        });
    }
}
exports.UsersController = new usersController();
exports.default = exports.UsersController;
