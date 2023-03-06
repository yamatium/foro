//los controladores son simples funciones que se llaman despues, los funciones crud (create,read,update, destroy) se definen aca y se exportan a routes

import { Request, Response } from "express";
import Usuario from '../models/usuario';


export const getUsuarios = async ( req: Request, res: Response) => {

    const usuarios = await Usuario.findAll();

    res.json(usuarios);

}

export const getUsuario = async ( req: Request, res: Response) => {

    const { id } = req.params;

    const usuario = await Usuario.findByPk( id );     //   buscar usuario por id 

   if ( usuario ) {
        res.json( usuario );
   } else {
        res.status(404).json({
            msg: `No existe un usuario con el id  ${ id }`
        });
   }

}

export const postUsuario = async( req: Request, res: Response) => {

    const { body } = req;

    try {

        const existeEmail = await Usuario.findOne({
            where: {
                email: body.email
            }
        });

        if (existeEmail) {
            return res.status(400).json({
                msg: 'Ya existe un usuario con el email ' + body.email
            });
        }

        const existeUsuario = await Usuario.findOne({
            where: {
                name: body.name
            }
        });

        if (existeUsuario) {
            return res.status(400).json({
                msg: 'Ya existe un usuario con el user ' + body.name
            });
        }

        const usuario = await  Usuario.create( body );
        await usuario.save();

        res.json( usuario );
        
    } catch (error) {
        console.log(error);
        res.status(500).json({
            msg: 'Hable con el admin'
        })
    }

}

export const putUsuario = async ( req: Request, res: Response) => {

    const { id } = req.params;
    const { body } = req;

    try {

        const usuario = await Usuario.findByPk( id );
        if(!usuario) {
            return res.status(404).json({
                msg:'No existe un usuario con el id ' + id
            });
        }


        await usuario.update( body );
          
        //cambiar el body para que el usuario solo pueda cambiar user,email y password pero no el estado;  el admin cambia el estado con el delete
        // video 263
        // update: consultar con ezus como hacer para que no se pueda modificar estado del usuario pipipi

        res.json ( usuario );
        
    } catch (error) {
        console.log(error);
        res.status(500).json({
            msg: 'Hable con el admin'
        })
        
    }

    
    // usar verificacion por webtoken si el user es hackeado
}


export const deleteUsuario = async ( req: Request, res: Response) => {

    // eliminacion fisica = borrar el usuario desde la db
    // eliminacion logica = actualizar el usuario a estado = 0 en la db, manteniendo la integridad referencial

    const { id } = req.params;

    const usuario = await Usuario.findByPk( id );
    if(!usuario) {
         return res.status(404).json({
            msg:'No existe un usuario con el id ' + id
        });
    }

    //await usuario.update({ estado: 0 });  //eliminacion logica, pasar el estado del usuario a 0 

    await usuario.destroy(); 
    //  eliminacion fisica, dejando registros huerfanos , constrains

    res.json(usuario);

}