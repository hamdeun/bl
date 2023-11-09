"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const jsonwebtoken_1 = __importDefault(require("jsonwebtoken"));
//Constante para validad el token de usuario
const validacionToken = (req, res, next) => {
    const headerToken = req.headers['authorization']; //Capturamos el token que se esta utilizando
    //Si es distinto a undefined y comienza con "Bearer", muestra productos
    if (headerToken != undefined && headerToken.startsWith("Bearer")) {
        //En esta instancia ya se tiene el token
        try {
            const bearerToken = headerToken.slice(7); //Recortamos "Bearer" y nos quedamos el token solo
            jsonwebtoken_1.default.verify(bearerToken, process.env.SECRET_KEY || "password123"); //Verificamos que el token no haya expirado y que no este corrupto
            next();
        }
        catch (error) {
            res.status(401).json({ msg: `Token no valido` });
        }
    } //Si es igual a undefined y no comienza con "Bearer", el acceso es denegado
    else {
        res.status(401).json({ msg: `Acceso denegado` });
    }
};
exports.default = validacionToken;
