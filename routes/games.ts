import { Router } from 'express';
import { getgames, postGames, putGame, deletegame } from '../controllers/reviews-games-images';




const router = Router();


router.get('/',  getgames);
router.post('/',  postGames);
router.put('/:id',  putGame);
router.delete('/:id', deletegame);


export default router;