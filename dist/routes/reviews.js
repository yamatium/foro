"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const reviews_games_images_1 = require("../controllers/reviews-games-images");
const router = (0, express_1.Router)();
router.get('/', reviews_games_images_1.getReviews);
router.get('/:id', reviews_games_images_1.getReview);
router.post('/', reviews_games_images_1.postReview);
router.put('/:id', reviews_games_images_1.putReview);
router.delete('/:id', reviews_games_images_1.deleteReview);
exports.default = router;
//# sourceMappingURL=reviews.js.map