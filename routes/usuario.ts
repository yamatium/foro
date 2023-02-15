import { Router } from 'express';
import { deleteUsuario, getUsuario, getUsuarios, postUsuario, putUsuario } from '../controllers/usuarios';


const router = Router();

// definir las rutas de los endpoints 
// definir los middlewares y validaciones , de jsonwebtoken , campos validos en put y post



router.get('/',       getUsuarios );
router.get('/:id',    getUsuario );
router.post('/',      postUsuario );         // validar correo, usuario y password
router.put('/:id',    putUsuario );         //  validar correo, usuario y password
router.delete('/:id', deleteUsuario );




export default router;