import { DataTypes } from "sequelize";//Importamos DataTypes para poder definir nuestra db 
import sequelize from "../db/connection.db";//Importamos sequelize de nuestra db


//Constante que representa a un producto de nuestra base de datos
export const Product = sequelize.define("product",{
    id: {                           //id: integer pk auto_increment
        type: DataTypes.INTEGER,    
        primaryKey: true,
        autoIncrement: true
    },
    nombre:{                        //nombre: string o varchar
        type: DataTypes.STRING
    },          
    descripcion:{                   // descripcion: string o varchar
        type:DataTypes.STRING
    }
})
