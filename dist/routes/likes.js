"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const post_likes_comments_1 = require("../controllers/post-likes-comments");
const router = (0, express_1.Router)();
router.get('/', post_likes_comments_1.getLikes);
router.post('/', post_likes_comments_1.postLikes);
router.put('/:id', post_likes_comments_1.putLikes);
router.delete('/:id', post_likes_comments_1.deleteLikes);
exports.default = router;
//# sourceMappingURL=likes.js.map