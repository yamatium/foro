import express, { Application } from 'express';
import cors   from 'cors';

import userRoutes from '../routes/usuario'; //  ver video 256 de rutas , para al poner mas funciones crud como ponerlas( crud de usurarios, de publicaciones y reviews y de listado de juegos)
import rolesRoutes from '../routes/roles';

import db from '../db/connection';



class Server {

    private app: Application;
    private port: string ;
    private apiPaths = {
        usuarios: '/api/usuarios',    //definir el endpoint a llamar en postman con el crud localhost:8000/api/usuarios/
        roles:    '/api/roles',
        
    }


    constructor() {
        

        this.app  = express();
        this.port = process.env.PORT || '8000';

        // en el constructor llamas a las funciones que estan definidas abajo
        // Metodos iniciales  , se llaman en el constructor para usarlos , sino solo estan definidos y no usados
        this.dbConnection();


        // usar el body en las rutas
        this.middlewares(); 

        // Definir mis rutas,  video 256
        this.routes();
    }

    async dbConnection() {

        try {

            await db.authenticate();     // authenticate = sequelizer
            console.log ('Database online');
            
        } catch (error) {
            throw new Error( 'error' );
        }
    }

    middlewares() {
        // funciones que se ejecutan antes que se ejecuten las rutas

        // CORS
        this.app.use( cors() );

        // Lectura del body
        this.app.use( express.json() );

        

    }
    

    routes () {

        this.app.use ( this.apiPaths.usuarios, userRoutes )
        this.app.use ( this.apiPaths.roles, rolesRoutes   )
        

    }


    listen() {
        this.app.listen( this.port, () => {
            console.log('Servidor corriendo en puerto ' + this.port );
        })
    }


}

export default Server;