"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const backend_1 = __importDefault(require("./models/backend"));
const dotenv_1 = __importDefault(require("dotenv"));
//Configuracion del dotenv para nuestro 'PORT' de '.env'
dotenv_1.default.config();
const server = new backend_1.default(); // Iniciamos una constante de nuestro servidor
