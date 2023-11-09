"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.Product = void 0;
const sequelize_1 = require("sequelize"); //Importamos DataTypes para poder definir nuestra db 
const connection_db_1 = __importDefault(require("../db/connection.db")); //Importamos sequelize de nuestra db
//Constante que representa a un producto de nuestra base de datos
exports.Product = connection_db_1.default.define("product", {
    id: {
        type: sequelize_1.DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true
    },
    nombre: {
        type: sequelize_1.DataTypes.STRING
    },
    descripcion: {
        type: sequelize_1.DataTypes.STRING
    }
});
