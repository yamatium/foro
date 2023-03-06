"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const post_likes_comments_1 = require("../controllers/post-likes-comments");
const router = (0, express_1.Router)();
router.get('/', post_likes_comments_1.getComments);
router.post('/', post_likes_comments_1.postComments);
router.put('/:id', post_likes_comments_1.putComments);
router.delete('/:id', post_likes_comments_1.deleteComments);
exports.default = router;
//# sourceMappingURL=comments.js.map