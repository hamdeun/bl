import { DataTypes } from "sequelize";//Importamos DataTypes para poder definir tipo de datos de nuestra db 
import sequelize from "../db/connection.db";//Importamos sequelize de nuestra db


//Constante que representa a un usuario de nuestra base de datos
export const User = sequelize.define("user",{
    id: {                           //id: integer pk auto_increment
        type: DataTypes.INTEGER,    
        primaryKey: true,
        autoIncrement: true
    },
    username:{                        //user: string o varchar
        type: DataTypes.STRING,
        unique: true,
        allowNull: false
    },          
    password:{                   // password: string o varchar
        type:DataTypes.STRING,
        allowNull: false
    }
})
