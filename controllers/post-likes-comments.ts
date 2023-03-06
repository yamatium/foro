import { Request, Response } from "express";


import Posts from '../models/post-likes-comments';
import Comments from '../models/post-likes-comments';
import Likes from '../models/post-likes-comments';


// get, post, put, delete likes


export const getPosts = async (req: Request, res: Response) => {

    const posts = await Posts.findAll();
    
    res.json(posts);
}

export const postPosts = async (req: Request, res:Response) => {

    const { body } = req;

    try {
        
        const post = await Posts.create( body );
        await post.save();

        res.json( post );

    } catch (error) {
        console.log(error);
        res.status(500).json({
            msg: 'Hable con el admin'
        })
        
    }
}

export const putPost = async (req: Request, res:Response) => {

    const { id }   = req.params;
    const { body } = req;

    try {
        const post = await Posts.findByPk ( id );
        if( !post ){
            return res.status(404).json({
                msg: 'No existe post con el id ' + id
            });
        }

        await post.update( body );
        res.json( post );

    } catch (error) {
        console.log(error);
        res.status(500).json({
            msg: 'Hable con el admin'
        })

    }

}

export const deletePost = async (req: Request, res:Response ) => {

    const { id } = req.params

    const post = await Posts.findByPk ( id );
    if(!post) {
        return res.status(404).json({
            msg: 'no existe post con el id ' + id
        });

    }
    await post.destroy();

    res.json(post);

}


export const getComments = async (req: Request, res:Response ) => {

    const comments = await Comments.findAll(); 

    res.json(comments);

}


export const postComments = async (req: Request, res:Response ) => {

    const { body } = req;

    try {

        const comments = await Comments.create( body );
        await comments.save();

        res.json( comments );
        
    } catch (error) {
        console.log(error);
        res.status(500).json({
            msg: 'Hable con el admin'
        })
        
    }
}

export const putComments = async (req: Request, res:Response) => {

    const { id }   = req.params;
    const { body } = req;

    try {
        const comment = await Comments.findByPk( id );
        if( !comment ){
            return res.status(404).json({
                msg: 'No existe commentario con ese id ' + id
            });
        }

        await comment.update( body );
        res.json( comment );

    } catch (error) {
        console.log(error);
        res.status(500).json({
            msg: 'Hable con el admin'
        })
        
    }
}



export const deleteComments = async (req: Request, res:Response ) => {

    const { id }= req.params;

    const comment = await Comments.findByPk( id );
    if( !comment ) {
        return res.status(404).json({
            msg: 'No se encontro el comentario con ese id ' + id
        });
    }

    await comment.destroy();
    res.json( comment );

}



export const getLikes = async (req: Request, res: Response) => {

    const likes = await Likes.findAll();
    
    res.json(likes);
}

export const postLikes = async (req: Request, res:Response) => {

    const { body } = req;

    try {
        
        const likes = await Likes.create( body );
        await likes.save();

        res.json( likes );

    } catch (error) {
        console.log(error);
        res.status(500).json({
            msg: 'Hable con el admin'
        })
        
    }
}

export const putLikes = async (req: Request, res:Response) => {

    const { id }   = req.params;
    const { body } = req;

    try {
        const likes = await Likes.findByPk( id );
        if( !likes ){
            return res.status(404).json({
                msg: 'No existe commentario con ese id ' + id
            });
        }

        await likes.update( body );
        res.json( likes );

    } catch (error) {
        console.log(error);
        res.status(500).json({
            msg: 'Hable con el admin'
        })
        
    }
}

export const deleteLikes = async (req: Request, res:Response ) => {

    const { id }= req.params;

    const like = await Likes.findByPk( id );
    if( !like ) {
        return res.status(404).json({
            msg: 'No se encontro el comentario con ese id ' + id
        });
    }

    await like.destroy();
    res.json( like );

}
