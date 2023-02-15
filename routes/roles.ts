import { Router } from 'express';
import { getRoles, postRoles, putRole, deleteRole, getUserRoles, postUserRoles, deleteUserRoles } from '../controllers/roles';


const router = Router();


router.get('/',       getRoles );
router.post('/',      postRoles);
router.put('/:id',    putRole );
router.delete('/:id', deleteRole);

router.get('/userRoles',      getUserRoles);
router.post('/userRoles/',     postUserRoles);
router.delete('/userRoles/:id',   deleteUserRoles);





export default router;