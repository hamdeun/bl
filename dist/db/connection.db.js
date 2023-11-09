"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const sequelize_1 = require("sequelize"); //Import sequealize para nuestra base de datos
//Creamos una constante con los valores de nuestra base de datos
const sequelize = new sequelize_1.Sequelize('angulardb', 'root', '', {
    host: 'localhost',
    dialect: 'mysql'
});
exports.default = sequelize;
