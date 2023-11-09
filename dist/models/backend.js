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
const express_1 = __importDefault(require("express")); //importamos express para poder utilizarlo
const product_routes_1 = __importDefault(require("../routes/product.routes")); //Importamos routes de product.routes
const usuario_routes_1 = __importDefault(require("../routes/usuario.routes")); //Importamos routes de usuarios o login
const product_models_1 = require("./product.models"); //Importamos Product
const user_models_1 = require("./user.models");
const cors_1 = __importDefault(require("cors"));
class BackEnd {
    constructor() {
        this.app = (0, express_1.default)(); //Inicializamos la variable
        this.port = process.env.PORT || "3001"; //Inicializamos nuestro puerto "PORT" que esta en '.env'
        //Si no lo encuentra, que el puerto sea 3001
        this.Listen(); //Lanzamos nuestro servidor 
        this.Midlewares(); //Lanzamos nuestro metodo de parseo
        this.Routes(); //Lanzamos nuestra ruta 
        this.dbConexion(); //Lanzamos de alta nuestra base de datos
    }
    Listen() {
        //Enviamos el puerto y el mensaje como parametros
        this.app.listen(this.port, () => {
            console.log("Aplicacion corriendo en el puerto " + this.port);
        });
    }
    Routes() {
        this.app.use("/api/products", product_routes_1.default); //Cuando el usuario ingrese la ruta /api/products
        //se lo envia a esa ruta
        this.app.use("/api/users", usuario_routes_1.default); //Cuando el usuario ingrese la ruta /api/users
        //se lo envia a esa ruta
    }
    Midlewares() {
        //Sin este metodo nuestro usuario tiene el campo "undefined" y no "usuario" y "password"
        this.app.use(express_1.default.json());
        this.app.use((0, cors_1.default)());
    }
    dbConexion() {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                yield product_models_1.Product.sync(); //Creamos la tabla y si ya existe no lo hacemos
                yield user_models_1.User.sync();
            }
            catch (error) { //Si hay un error en el proceso, se imprime
                console.log("error: ", error);
            }
        });
    }
}
exports.default = BackEnd;
