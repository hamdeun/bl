import {Router} from 'express'; //Importamos Router de express para nuestro enrutamiento
import {nuevoUsuario, loginUsuario} from '../controllers/user.controllers'; //Importamos nuevoUsuario y login

const router = Router();

router.post('/',nuevoUsuario)       //Cuando el usuario ingrese a esta ruta se ejecuta nuevoUsuario
router.post('/login',loginUsuario)  //Cuando el usuario ingrese a esta ruta se ejecuta loginUsuario
export default router;