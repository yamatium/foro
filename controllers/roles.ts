
import { Request, Response } from "express";
import  Roles  from "../models/roles";
import userRoles from '../models/user-roles';



export const getRoles = async  ( req: Request , res:Response ) => {

    const roles = await Roles.findAll();

    res.json(roles);

}

export const postRoles = async ( req: Request, res: Response ) => {

    const { body } = req;


    try {

        const ExisteRol = await Roles.findOne({
            where : {
                name: body.name
            }
        });

        if( ExisteRol ) {
            return res.status(400).json({
                msg: 'Ya existe un rol con el nombre' + body.name
            });
        }

        const role = await Roles.create( body);
        await role.save();

        res.json( role );

        
    } catch (error) {
        console.log(error);
        res.status(500).json({
            msg: 'Hable con el admin'
        })
        
    }
}


export const putRole = async ( req: Request, res: Response ) =>{

    const { id }   = req.params;
    const { body } = req;

    try {
        const rol = await Roles.findByPk( id );
        if( !rol ) {
            return res.status(404).json({
                msg: 'No existe un rol con el id ' + id
            });
        }

        await rol.update( body );
        res.json( rol );
        
    } catch (error) {
        console.log(error);
        res.status(500).json({
            msg: 'Hable con el admin'
        })
        
    }
}

export const deleteRole = async (req: Request, res:Response ) => {

    const { id } = req.params;

    const role = await Roles.findByPk( id );
    if(!role) {
        return res.status(404).json({
            msg: 'No existe rol con ese id ' + id
        });
    }

    await role.destroy();

    res.json(role);


}



export const getUserRoles = async ( req: Request, res: Response ) => {

    const userroles = await userRoles.findAll();

    res.json(userroles);
};

export const postUserRoles = async ( req: Request, res: Response ) => {

    const { body } = req;


    try {

        const userrole = await userRoles.create( body );
        await userrole.save();

        res.json( userrole );

        
    } catch (error) {
        console.log(error);
        res.status(500).json({
            msg: 'Hable con el admin'
        })
    }
}


export const deleteUserRoles = async (req: Request, res:Response ) => {

    const { id } = req.params

    const userrole = await userRoles.findByPk( id );
    if( !userrole ) {
        return res.status(404).json({
            msg: 'No existe rol con ese id ' + id
        })
    }
    
    await userrole.destroy();

    res.json(userrole);

}