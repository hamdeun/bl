import {Router} from 'express'; //Importamos Router de express para nuestro enrutamiento

import { mostrarProduct } from '../controllers/product.controllers'; //Importamos mostrarProduct
import validacionToken from './validacion-token.routes';//Importamos la validacion de token

const router = Router();
router.get('/',validacionToken,mostrarProduct)  //Cuando el usuario ingrese a esta ruta se ejecuta mostrarProduct

export default router;