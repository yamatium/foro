"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const reviews_games_images_1 = require("../controllers/reviews-games-images");
const router = (0, express_1.Router)();
router.get('/', reviews_games_images_1.getImages);
router.get('/:id', reviews_games_images_1.getImage);
router.post('/', reviews_games_images_1.postImage);
router.put('/:id', reviews_games_images_1.putImage);
router.delete('/:id', reviews_games_images_1.deleteImage);
exports.default = router;
//# sourceMappingURL=images.js.map