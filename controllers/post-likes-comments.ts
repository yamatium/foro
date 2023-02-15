import { Request, Response } from "express";
import Posts from '../models/post-likes-comments';


//get post individual,  posts
// get, post, put, delete likes
// get, post , put , delete comments

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