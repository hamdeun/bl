import {Request, Response} from 'express'; //Importamos Request y Responde de express
import { Product } from '../models/product.models';//Importamos producto de nuesta db

//Constante que nos da una respuesta mediante un requisito
export const mostrarProduct =async (req: Request, res: Response ) =>{

    const listaProductos = await Product.findAll(); //Constate que almacena todos los productos de la db

    res.json(listaProductos)//Utilizamos res.json para mostrar un mensaje de respuesta(listaProductos)
                               
    

}