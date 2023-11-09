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
Object.defineProperty(exports, "__esModule", { value: true });
exports.mostrarProduct = void 0;
const product_models_1 = require("../models/product.models"); //Importamos producto de nuesta db
//Constante que nos da una respuesta mediante un requisito
const mostrarProduct = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const listaProductos = yield product_models_1.Product.findAll(); //Constate que almacena todos los productos de la db
    res.json(listaProductos); //Utilizamos res.json para mostrar un mensaje de respuesta(listaProductos)
});
exports.mostrarProduct = mostrarProduct;
