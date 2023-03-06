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
const express_1 = __importDefault(require("express"));
const cors_1 = __importDefault(require("cors"));
const usuario_1 = __importDefault(require("../routes/usuario"));
const roles_1 = __importDefault(require("../routes/roles"));
const posts_1 = __importDefault(require("../routes/posts"));
const comments_1 = __importDefault(require("../routes/comments"));
const likes_1 = __importDefault(require("../routes/likes"));
const reviews_1 = __importDefault(require("../routes/reviews"));
const games_1 = __importDefault(require("../routes/games"));
const images_1 = __importDefault(require("../routes/images"));
const connection_1 = __importDefault(require("../db/connection"));
class Server {
    constructor() {
        this.apiPaths = {
            usuarios: '/api/usuarios',
            roles: '/api/roles',
            post: '/api/posts',
            comments: '/api/comments',
            likes: '/api/likes',
            reviews: '/api/reviews',
            games: '/api/games',
            images: '/api/images'
        };
        this.app = (0, express_1.default)();
        this.port = process.env.PORT || '8000';
        this.dbConnection();
        this.middlewares();
        this.routes();
    }
    dbConnection() {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                yield connection_1.default.authenticate(); // authenticate = sequelizer
                console.log('Database online');
            }
            catch (error) {
                throw new Error('error');
            }
        });
    }
    middlewares() {
        // CORS
        this.app.use((0, cors_1.default)());
        // Lectura del body
        this.app.use(express_1.default.json());
    }
    routes() {
        this.app.use(this.apiPaths.usuarios, usuario_1.default);
        this.app.use(this.apiPaths.roles, roles_1.default);
        this.app.use(this.apiPaths.post, posts_1.default);
        this.app.use(this.apiPaths.comments, comments_1.default);
        this.app.use(this.apiPaths.likes, likes_1.default);
        this.app.use(this.apiPaths.reviews, reviews_1.default);
        this.app.use(this.apiPaths.games, games_1.default);
        this.app.use(this.apiPaths.images, images_1.default);
    }
    listen() {
        this.app.listen(this.port, () => {
            console.log('Servidor corriendo en puerto ' + this.port);
        });
    }
}
exports.default = Server;
//# sourceMappingURL=server.js.map