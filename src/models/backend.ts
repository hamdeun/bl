import express from 'express'; //importamos express para poder utilizarlo
import routesProduct from '../routes/product.routes';//Importamos routes de product.routes
import routesUser from '../routes/usuario.routes';//Importamos routes de usuarios o login
import { Product } from './product.models';//Importamos Product
import { User } from './user.models';
import cors from 'cors';

class BackEnd { //Se crea la clase backend para hacer uso del servidor

    private app: express.Application;   //Variable para crear la api 
    private port : string | undefined;  //Variable de nuestro puerto que puede ser string o undefined
    constructor(){
        this.app= express();            //Inicializamos la variable
        this.port = process.env.PORT || "3001"; //Inicializamos nuestro puerto "PORT" que esta en '.env'
                                        //Si no lo encuentra, que el puerto sea 3001
        this.Listen();                  //Lanzamos nuestro servidor 
        this.Midlewares()               //Lanzamos nuestro metodo de parseo
        this.Routes();                  //Lanzamos nuestra ruta 
        this.dbConexion();              //Lanzamos de alta nuestra base de datos
    }

    Listen (){                          //Metodo que utilizamos para lanzar nuestro servidor
                                        //Enviamos el puerto y el mensaje como parametros
        this.app.listen(this.port, () =>{
            console.log("Aplicacion corriendo en el puerto " + this.port)
        } );
    }

    Routes(){                           //Metodo que utilizamos para lanzar nuestra ruta
        this.app.use("/api/products", routesProduct);   //Cuando el usuario ingrese la ruta /api/products
                                                        //se lo envia a esa ruta

        this.app.use("/api/users", routesUser);         //Cuando el usuario ingrese la ruta /api/users
                                                        //se lo envia a esa ruta
    }

    Midlewares(){   //Metodo que nos parsea el undefined a los datos de nuestro objeto user.
                    //Sin este metodo nuestro usuario tiene el campo "undefined" y no "usuario" y "password"
        this.app.use(express.json() )
        this.app.use(cors())
    }

    async dbConexion(){             //Metodo con el que damos de alta la base de datos
        try {
            await Product.sync();   //Creamos la tabla y si ya existe no lo hacemos
            await User.sync(); 
        } catch (error) {           //Si hay un error en el proceso, se imprime
            console.log("error: ", error);
        }
    }

}

export default BackEnd;

