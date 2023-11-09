import BackEnd from "./models/backend";
import dotenv from 'dotenv';


//Configuracion del dotenv para nuestro 'PORT' de '.env'
dotenv.config()

const server = new BackEnd(); // Iniciamos una constante de nuestro servidor

