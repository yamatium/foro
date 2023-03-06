import express, { Application } from 'express';
import cors   from 'cors';


import userRoutes from '../routes/usuario'; 
import rolesRoutes from '../routes/roles';
import postRoutes from '../routes/posts';
import commentsRoutes from '../routes/comments';
import likesRoutes from '../routes/likes';
import reviewsRoutes     from '../routes/reviews';
import gamesRoutes from  '../routes/games';
import imagesRoutes  from '../routes/images';

import db from '../db/connection';



class Server {

    private app: Application;
    private port: string ;
    private apiPaths = {
        usuarios:  '/api/usuarios',    //definir el endpoint a llamar en postman con el crud localhost:8000/api/usuarios/
        roles:     '/api/roles',
        post:      '/api/posts',
        comments:  '/api/comments',
        likes:     '/api/likes',
        reviews:   '/api/reviews',
        games:     '/api/games',
        images:    '/api/images'

        
    }


    constructor() {
        
        this.app  = express();
        this.port = process.env.PORT || '8000';

        this.dbConnection();

        this.middlewares(); 

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

        // CORS
        this.app.use( cors() );

        // Lectura del body
        this.app.use( express.json() );

    }
    

    routes () {

        this.app.use ( this.apiPaths.usuarios, userRoutes   )
        this.app.use ( this.apiPaths.roles,    rolesRoutes  )
        this.app.use ( this.apiPaths.post,     postRoutes   )
        this.app.use ( this.apiPaths.comments,  commentsRoutes)
        this.app.use ( this.apiPaths.likes,     likesRoutes   )
        this.app.use ( this.apiPaths.reviews,   reviewsRoutes)
        this.app.use ( this.apiPaths.games,     gamesRoutes)
        this.app.use ( this.apiPaths.images,    imagesRoutes)
    }


    listen() {
        this.app.listen( this.port, () => {
            console.log('Servidor corriendo en puerto ' + this.port );
        })
    }


}

export default Server;