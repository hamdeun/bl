"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express"); //Importamos Router de express para nuestro enrutamiento
const user_controllers_1 = require("../controllers/user.controllers"); //Importamos nuevoUsuario y login
const router = (0, express_1.Router)();
router.post('/', user_controllers_1.nuevoUsuario); //Cuando el usuario ingrese a esta ruta se ejecuta nuevoUsuario
router.post('/login', user_controllers_1.loginUsuario); //Cuando el usuario ingrese a esta ruta se ejecuta loginUsuario
exports.default = router;
