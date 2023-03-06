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
exports.deleteImage = exports.putImage = exports.postImage = exports.getImage = exports.getImages = exports.deletegame = exports.putGame = exports.postGames = exports.getgames = exports.deleteReview = exports.putReview = exports.postReview = exports.getReview = exports.getReviews = void 0;
const reviews_games_images_1 = __importDefault(require("../models/reviews-games-images"));
const reviews_games_images_2 = __importDefault(require("../models/reviews-games-images"));
const reviews_games_images_3 = __importDefault(require("../models/reviews-games-images"));
const getReviews = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const reviews = yield reviews_games_images_1.default.findAll();
    res.json(reviews);
});
exports.getReviews = getReviews;
const getReview = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const { g_id } = req.params;
    const usuario = yield reviews_games_images_1.default.findAll({ attributes: ['g_id'] }); //   buscar juego por FK g_id 
    if (g_id) {
        res.json(g_id);
    }
    else {
        res.status(404).json({
            msg: `No existen reviews con el g_id  ${g_id}`
        });
    }
});
exports.getReview = getReview;
const postReview = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const { body } = req;
    try {
        const reviews = yield reviews_games_images_1.default.create(body);
        yield reviews.save();
        res.json(reviews);
    }
    catch (error) {
        console.log(error);
        res.status(500).json({
            msg: 'Hable con el admin'
        });
    }
});
exports.postReview = postReview;
const putReview = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const { id } = req.params;
    const { body } = req;
    try {
        const review = yield reviews_games_images_1.default.findByPk(id);
        if (!review) {
            return res.status(404).json({
                msg: 'No se encontro una review con ese ' + id
            });
        }
        yield review.update(body);
        res.json(review);
    }
    catch (error) {
        console.log(error);
        res.status(500).json({
            msg: 'Hable con el admin'
        });
    }
});
exports.putReview = putReview;
const deleteReview = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const { id } = req.params;
    const review = yield reviews_games_images_1.default.findByPk(id);
    if (!review) {
        return res.status(404).json({
            msg: 'No existe una review con el id ' + id
        });
    }
    //await usuario.update({ estado: 0 });  //eliminacion logica, pasar el estado del usuario a 0 
    yield review.destroy();
    //  eliminacion fisica, dejando registros huerfanos , constrains
    res.json(review);
});
exports.deleteReview = deleteReview;
const getgames = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const games = yield reviews_games_images_2.default.findAll();
    res.json(games);
});
exports.getgames = getgames;
const postGames = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const { body } = req;
    try {
        const existeGame = yield reviews_games_images_2.default.findOne({
            where: {
                name: body.name
            }
        });
        if (existeGame) {
            return res.status(400).json({
                msg: 'Ya existe un game con el name ' + body.name
            });
        }
        const game = yield reviews_games_images_2.default.create(body);
        yield game.save();
    }
    catch (error) {
        console.log(error);
        res.status(500).json({
            msg: 'Hable con el admin'
        });
    }
});
exports.postGames = postGames;
const putGame = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const { id } = req.params;
    const { body } = req;
    try {
        const game = yield reviews_games_images_2.default.findByPk(id);
        if (!game) {
            return res.status(404).json({
                msg: 'No existe un juego con el id ' + id
            });
        }
        yield game.update(body);
        res.json(game);
    }
    catch (error) {
        console.log(error);
        res.status(500).json({
            msg: 'Hable con el admin'
        });
    }
});
exports.putGame = putGame;
const deletegame = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const { id } = req.params;
    const game = yield reviews_games_images_2.default.findByPk(id);
    if (!game) {
        return res.status(404).json({
            msg: 'no existe juego con el id ' + id
        });
    }
    yield game.destroy();
    res.json(game);
});
exports.deletegame = deletegame;
const getImages = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const images = yield reviews_games_images_3.default.findAll();
    res.json(images);
});
exports.getImages = getImages;
const getImage = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const { id } = req.params;
    const image = yield reviews_games_images_3.default.findByPk(id);
    if (image) {
        res.json(id);
    }
    else {
        res.status(404).json({
            msg: `No existen imagen con el id ` + id
        });
    }
});
exports.getImage = getImage;
const postImage = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const { body } = req;
    try {
        const image = yield reviews_games_images_3.default.create(body);
        yield image.save();
        res.json(image);
    }
    catch (error) {
        console.log(error);
        res.status(500).json({
            msg: 'Hable con el admin'
        });
    }
});
exports.postImage = postImage;
const putImage = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const { id } = req.params;
    const { body } = req;
    try {
        const image = yield reviews_games_images_3.default.findByPk(id);
        if (!image) {
            return res.status(404).json({
                msg: 'No existe una imagen con el id ' + id
            });
        }
        yield image.update(body);
        res.json(image);
    }
    catch (error) {
        console.log(error);
        res.status(500).json({
            msg: 'Hable con el admin'
        });
    }
});
exports.putImage = putImage;
const deleteImage = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const { id } = req.params;
    const image = yield reviews_games_images_3.default.findByPk(id);
    if (!image) {
        return res.status(404).json({
            msg: 'No existe una imagen con el id ' + id
        });
    }
    yield image.destroy();
    res.json(image);
});
exports.deleteImage = deleteImage;
//# sourceMappingURL=reviews-games-images.js.map