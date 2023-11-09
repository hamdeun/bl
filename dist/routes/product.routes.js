"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express"); //Importamos Router de express para nuestro enrutamiento
const product_controllers_1 = require("../controllers/product.controllers"); //Importamos mostrarProduct
const validacion_token_routes_1 = __importDefault(require("./validacion-token.routes")); //Importamos la validacion de token
const router = (0, express_1.Router)();
router.get('/', validacion_token_routes_1.default, product_controllers_1.mostrarProduct); //Cuando el usuario ingrese a esta ruta se ejecuta mostrarProduct
exports.default = router;
