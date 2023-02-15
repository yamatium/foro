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
exports.deletePost = exports.putPost = exports.postPosts = exports.getPosts = void 0;
const post_likes_comments_1 = __importDefault(require("../models/post-likes-comments"));
//get post individual,  posts
// get, post, put, delete likes
// get, post , put , delete comments
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
//# sourceMappingURL=post-likes-comments.js.map