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
exports.loginUsuario = exports.nuevoUsuario = void 0;
const bcrypt_1 = __importDefault(require("bcrypt")); //Importamos para encriptar datos
const user_models_1 = require("../models/user.models"); //Importamos el usuario
const jsonwebtoken_1 = __importDefault(require("jsonwebtoken")); //Importamos para generar token
//Constante que nos da una respuesta mediante un requisito
const nuevoUsuario = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const { username, password } = req.body; //Extrae el body del requisito
    //Validamos que el username no exista en la db
    const usuario = yield user_models_1.User.findOne({ where: { username: username } });
    if (usuario) { //Si el username existe, se imprime el caso
        res.status(400).json({ msg: `Usuario ${username} ya existe` });
    }
    else { //Si el username no existe, se permite el ingreso a la db
        const hashPassword = yield bcrypt_1.default.hash(password, 10); //Utilizamos bcrypt para encriptar la password
        try {
            yield user_models_1.User.create({
                username: username,
                password: hashPassword //Contraseña encriptada
            });
            res.json({
                msg: `Usuario ${username} creado exitosamente`, //Respuesta Mensaje
            });
        }
        catch (error) {
            res.status(400).json({ msg: `Ocurrio un error: ${error}` });
        }
    }
});
exports.nuevoUsuario = nuevoUsuario;
//Constante que nos da una respuesta mediante un requisito
const loginUsuario = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const { username, password } = req.body; //Extrae el body del requisito
    //Validamos si el usuario existe en la db
    const usuario = yield user_models_1.User.findOne({ where: { username: username } });
    if (!usuario) { //Si el username no existe, se imprime lo sucedido, caso contrario continua
        return res.status(400).json({ msg: `Usuario ${username} no existe` });
    }
    //Validamos la contraseña 
    const passwordValida = yield bcrypt_1.default.compare(password, usuario.password); //Comparamos la contraseña y la contraseña encriptada
    if (!passwordValida) { //Si es falso quiere decir que la contraseña es invalida, caso contrario continua
        return res.status(400).json({ msg: `Contraseña incorrecta` });
    }
    //Generamos el token
    const token = jsonwebtoken_1.default.sign({
        username: username,
    }, process.env.SECRET_KEY || "password123");
    res.json(token); //Devolvemos el token generado
});
exports.loginUsuario = loginUsuario;
