import { Router } from 'express';
import { getReviews, getReview, postReview, putReview, deleteReview } from '../controllers/reviews-games-images';


const router = Router();



router.get('/',  getReviews);
router.get('/:id',  getReview);
router.post('/',  postReview);
router.put('/:id',  putReview);
router.delete('/:id',  deleteReview);



export default router;

