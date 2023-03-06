"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.deleteLikes = exports.putLikes = exports.postLikes = exports.getLikes = exports.deleteComments = exports.putComments = exports.postComments = exports.getComments = exports.deletePost = exports.putPost = exports.postPosts = exports.getPosts = void 0;
const post_likes_comments_1 = __importDefault(require("../models/post-likes-comments"));
const post_likes_comments_2 = __importDefault(require("../models/post-likes-comments"));
const post_likes_comments_3 = __importDefault(require("../models/post-likes-comments"));
// get, post, put, delete likes
const getPosts = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const posts = yield post_likes_comments_1.default.findAll();
    res.json(posts);
});
exports.getPosts = getPosts;
const postPosts = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const { body } = req;
    try {
        const post = yield post_likes_comments_1.default.create(body);
        yield post.save();
        res.json(post);
    }
    catch (error) {
        console.log(error);
        res.status(500).json({
            msg: 'Hable con el admin'
        });
    }
});
exports.postPosts = postPosts;
const putPost = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const { id } = req.params;
    const { body } = req;
    try {
        const post = yield post_likes_comments_1.default.findByPk(id);
        if (!post) {
            return res.status(404).json({
                msg: 'No existe post con el id ' + id
            });
        }
        yield post.update(body);
        res.json(post);
    }
    catch (error) {
        console.log(error);
        res.status(500).json({
            msg: 'Hable con el admin'
        });
    }
});
exports.putPost = putPost;
const deletePost = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const { id } = req.params;
    const post = yield post_likes_comments_1.default.findByPk(id);
    if (!post) {
        return res.status(404).json({
            msg: 'no existe post con el id ' + id
        });
    }
    yield post.destroy();
    res.json(post);
});
exports.deletePost = deletePost;
const getComments = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const comments = yield post_likes_comments_2.default.findAll();
    res.json(comments);
});
exports.getComments = getComments;
const postComments = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const { body } = req;
    try {
        const comments = yield post_likes_comments_2.default.create(body);
        yield comments.save();
        res.json(comments);
    }
    catch (error) {
        console.log(error);
        res.status(500).json({
            msg: 'Hable con el admin'
        });
    }
});
exports.postComments = postComments;
const putComments = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const { id } = req.params;
    const { body } = req;
    try {
        const comment = yield post_likes_comments_2.default.findByPk(id);
        if (!comment) {
            return res.status(404).json({
                msg: 'No existe commentario con ese id ' + id
            });
        }
        yield comment.update(body);
        res.json(comment);
    }
    catch (error) {
        console.log(error);
        res.status(500).json({
            msg: 'Hable con el admin'
        });
    }
});
exports.putComments = putComments;
const deleteComments = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const { id } = req.params;
    const comment = yield post_likes_comments_2.default.findByPk(id);
    if (!comment) {
        return res.status(404).json({
            msg: 'No se encontro el comentario con ese id ' + id
        });
    }
    yield comment.destroy();
    res.json(comment);
});
exports.deleteComments = deleteComments;
const getLikes = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const likes = yield post_likes_comments_3.default.findAll();
    res.json(likes);
});
exports.getLikes = getLikes;
const postLikes = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const { body } = req;
    try {
        const likes = yield post_likes_comments_3.default.create(body);
        yield likes.save();
        res.json(likes);
    }
    catch (error) {
        console.log(error);
        res.status(500).json({
            msg: 'Hable con el admin'
        });
    }
});
exports.postLikes = postLikes;
const putLikes = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const { id } = req.params;
    const { body } = req;
    try {
        const likes = yield post_likes_comments_3.default.findByPk(id);
        if (!likes) {
            return res.status(404).json({
                msg: 'No existe commentario con ese id ' + id
            });
        }
        yield likes.update(body);
        res.json(likes);
    }
    catch (error) {
        console.log(error);
        res.status(500).json({
            msg: 'Hable con el admin'
        });
    }
});
exports.putLikes = putLikes;
const deleteLikes = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const { id } = req.params;
    const like = yield post_likes_comments_3.default.findByPk(id);
    if (!like) {
        return res.status(404).json({
            msg: 'No se encontro el comentario con ese id ' + id
        });
    }
    yield like.destroy();
    res.json(like);
});
exports.deleteLikes = deleteLikes;
//# sourceMappingURL=post-likes-comments.js.map