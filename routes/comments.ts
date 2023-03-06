import { Router } from 'express';
import { getComments, postComments, putComments, deleteComments } from '../controllers/post-likes-comments';


const router = Router();



router.get('/',       getComments);
router.post('/',      postComments);
router.put('/:id',    putComments);
router.delete('/:id', deleteComments);


export default router;