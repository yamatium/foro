"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const reviews_games_images_1 = require("../controllers/reviews-games-images");
const router = (0, express_1.Router)();
router.get('/', reviews_games_images_1.getgames);
router.post('/', reviews_games_images_1.postGames);
router.put('/:id', reviews_games_images_1.putGame);
router.delete('/:id', reviews_games_images_1.deletegame);
exports.default = router;
//# sourceMappingURL=games.js.map