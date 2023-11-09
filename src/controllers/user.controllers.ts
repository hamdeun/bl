import {Request, Response} from 'express';//Importamos un Request y un Response de express
import bcrypt from 'bcrypt';    //Importamos para encriptar datos
import { User } from '../models/user.models';//Importamos el usuario
import jwt from 'jsonwebtoken'; //Importamos para generar token

//Constante que nos da una respuesta mediante un requisito
export const nuevoUsuario = async (req: Request, res: Response)=>{
    
    const {username, password} = req.body; //Extrae el body del requisito

    //Validamos que el username no exista en la db
    const usuario = await User.findOne({where: {username: username}});

    if(usuario){    //Si el username existe, se imprime el caso
        res.status(400).json({msg:`Usuario ${username} ya existe`});
    }
    else{           //Si el username no existe, se permite el ingreso a la db
        const hashPassword = await bcrypt.hash(password, 10);//Utilizamos bcrypt para encriptar la password
        try {
            await User.create({         //Ingresamos un usuario a nuestra db
                username: username,     //Nombre de usuario
                password: hashPassword  //Contraseña encriptada
            })
            res.json({
                msg: `Usuario ${username} creado exitosamente`,   //Respuesta Mensaje
                                
            })
        } catch (error) {
            res.status(400).json({msg:`Ocurrio un error: ${error}`})
        }
    }
}

//Constante que nos da una respuesta mediante un requisito
export const loginUsuario = async (req: Request, res: Response)=>{
    
    const {username, password} = req.body; //Extrae el body del requisito

    //Validamos si el usuario existe en la db
    const usuario: any = await User.findOne({where: {username: username}});
    if(!usuario){//Si el username no existe, se imprime lo sucedido, caso contrario continua
        return res.status(400).json({msg:`Usuario ${username} no existe`});
    }

    //Validamos la contraseña 
    const passwordValida = await bcrypt.compare(password, usuario.password);//Comparamos la contraseña y la contraseña encriptada
    if(!passwordValida){ //Si es falso quiere decir que la contraseña es invalida, caso contrario continua
        return res.status(400).json({msg: `Contraseña incorrecta`})
    }

    //Generamos el token
    const token = jwt.sign({    //Se envia el username y la SECRET_KEY, si no la encuentra usa password123
        username: username,
    },process.env.SECRET_KEY || "password123")

    res.json(token) //Devolvemos el token generado
    
}
