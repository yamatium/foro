import { Router } from 'express';
import { getPosts, postPosts, putPost, deletePost} from '../controllers/post-likes-comments';


const router = Router();


router.get('/',         getPosts);
router.post('/',        postPosts);
router.put('/:id',      putPost);
router.delete('/:id',   deletePost);


export default router;
