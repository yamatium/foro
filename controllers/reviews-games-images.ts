import { Request, Response } from "express";
import Reviews from '../models/reviews-games-images';
import Games from '../models/reviews-games-images';
import Images from '../models/reviews-games-images';



export const getReviews = async( req:Request, res:Response ) => {

    const reviews = await Reviews.findAll();

    res.json( reviews);

}

export const getReview = async ( req: Request, res: Response) => {

    const { g_id } = req.params;

    const usuario = await Reviews.findAll({ attributes:['g_id'] });     //   buscar juego por FK g_id 

   if ( g_id ) {
        res.json( g_id );
   } else {
        res.status(404).json({
            msg: `No existen reviews con el g_id  ${ g_id }`
        });
   }

}

export const postReview = async ( req: Request, res:Response) => {

    const { body } = req;

    try {

        const reviews = await Reviews.create( body );
        await reviews.save();
        
        res.json( reviews );
        
    } catch (error) {
        console.log(error);
        res.status(500).json({
            msg: 'Hable con el admin'
        })
        
    }

}


export const putReview = async( req:Request, res:Response) => {

    const { id }   = req.params;
    const { body } = req;

    try {
        const review = await Reviews.findByPk( id );
        if( !review ) {
            return res.status(404).json({
                msg: 'No se encontro una review con ese ' + id
            })
        }

        await review.update( body );

        res.json( review );

    } catch (error) {
        console.log( error );
        res.status(500).json({
            msg: 'Hable con el admin'
        })
        
    }
}

export const deleteReview = async( req:Request, res:Response) => {

    const { id } = req.params;

    const review = await Reviews.findByPk( id );
    if(!review) {
         return res.status(404).json({
            msg:'No existe una review con el id ' + id
        });
    }

    //await usuario.update({ estado: 0 });  //eliminacion logica, pasar el estado del usuario a 0 

    await review.destroy(); 
    //  eliminacion fisica, dejando registros huerfanos , constrains

    res.json( review );
}





export const getgames = async( req:Request, res:Response ) => {

    const games = await Games.findAll();

    res.json( games );

}


export const postGames = async( req:Request, res:Response ) => {

    const { body } = req;

    try {
        
        const existeGame = await Games.findOne({
            where: {
                name: body.name
            }
        });

        if ( existeGame ) {
            return res.status(400).json({
                msg: 'Ya existe un game con el name ' + body.name
            })
        }

        const game = await Games.create( body );
        await game.save();

    } catch (error) {
        console.log(error);
        res.status(500).json({
            msg: 'Hable con el admin'
        })
        
    }

}


export const putGame = async ( req: Request, res: Response) => {

    const { id } = req.params;
    const { body } = req;

    try {

        const game = await Games.findByPk( id );
        if(!game) {
            return res.status(404).json({
                msg:'No existe un juego con el id ' + id
            });
        }


        await game.update( body );
          
        res.json ( game );
        
    } catch (error) {
        console.log(error);
        res.status(500).json({
            msg: 'Hable con el admin'
        })
        
    }

    
}



export const deletegame = async (req: Request, res:Response ) => {

    const { id } = req.params

    const game = await Games.findByPk ( id );
    if(!game) {
        return res.status(404).json({
            msg: 'no existe juego con el id ' + id
        });

    }
    await game.destroy();

    res.json(game);

}





export const getImages = async( req:Request, res:Response ) => {

    const images = await Images.findAll();

    res.json( images );

}

export const getImage = async ( req: Request, res: Response) => {

    const { id } = req.params;

    const image = await Images.findByPk( id );   

   if ( image ) {
        res.json( id );
   } else {
        res.status(404).json({
            msg: `No existen imagen con el id ` + id
        });
   }

}

export const postImage = async( req: Request, res: Response) => {

    const { body } = req;

    try {


        const image = await  Images.create( body );
        await image.save();

        res.json( image );
        
    } catch (error) {
        console.log(error);
        res.status(500).json({
            msg: 'Hable con el admin'
        })
    }

}

export const putImage = async ( req: Request, res: Response) => {

    const { id } = req.params;
    const { body } = req;

    try {

        const image = await Images.findByPk( id );
        if(!image) {
            return res.status(404).json({
                msg:'No existe una imagen con el id ' + id
            });
        }


        await image.update( body );
          
        res.json ( image );
        
    } catch (error) {
        console.log(error);
        res.status(500).json({
            msg: 'Hable con el admin'
        })
        
    }
 
}


export const deleteImage = async ( req: Request, res: Response) => {

    const { id } = req.params;

    const image = await Images.findByPk( id );
    if(!image) {
         return res.status(404).json({
            msg:'No existe una imagen con el id ' + id
        });
    }

    await image.destroy(); 
 
    res.json( image );

}


