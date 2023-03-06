import { Router } from 'express';
import { getImage, getImages, postImage, putImage, deleteImage } from '../controllers/reviews-games-images';




const router = Router();


router.get('/', getImages);
router.get('/:id', getImage);
router.post('/', postImage);
router.put('/:id',  putImage);
router.delete('/:id', deleteImage);


export default router;