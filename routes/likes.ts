import { Router } from 'express';
import { getLikes, postLikes, putLikes, deleteLikes } from '../controllers/post-likes-comments';

const router = Router();



router.get('/',        getLikes);
router.post('/',       postLikes);
router.put('/:id',     putLikes);
router.delete('/:id',  deleteLikes);


export default router;