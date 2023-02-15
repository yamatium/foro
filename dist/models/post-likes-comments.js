"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const sequelize_1 = require("sequelize");
const connection_1 = __importDefault(require("../db/connection"));
const usuario_1 = __importDefault(require("./usuario"));
const reviews_games_images_1 = __importDefault(require("./reviews-games-images"));
const Posts = connection_1.default.define('posts', {
    title: {
        type: sequelize_1.DataTypes.STRING
    },
    description: {
        type: sequelize_1.DataTypes.STRING
    },
    user_id: {
        type: sequelize_1.DataTypes.INTEGER
    },
}, {
    timestamps: false
});
usuario_1.default.hasMany(Posts, { as: 'user_id' });
//Posts.belongsTo(Usuario);
const Comments = connection_1.default.define('comments', {
    body: {
        type: sequelize_1.DataTypes.STRING
    },
    post_id: {
        type: sequelize_1.DataTypes.INTEGER
    },
    u_id: {
        type: sequelize_1.DataTypes.INTEGER
    },
    review_id: {
        type: sequelize_1.DataTypes.INTEGER
    },
}, {
    timestamps: false
});
usuario_1.default.hasMany(Comments, { as: 'u_id' });
Posts.hasMany(Comments, { as: 'post_id' });
reviews_games_images_1.default.hasMany(Comments, { as: 'review_id' });
// falta review
//Comments.hasOne( Usuario);
const Likes = connection_1.default.define('likes', {
    value: {
        type: sequelize_1.DataTypes.BOOLEAN
    },
    p_id: {
        type: sequelize_1.DataTypes.INTEGER
    },
    reviews_id: {
        type: sequelize_1.DataTypes.INTEGER
    },
    users_id: {
        type: sequelize_1.DataTypes.INTEGER
    },
}, {
    timestamps: false
});
Posts.hasMany(Likes, { as: 'p_id' });
reviews_games_images_1.default.hasMany(Likes, { as: 'reviews_id' });
usuario_1.default.hasMany(Likes, { as: 'users_id' });
exports.default = Posts;
Comments;
Likes;
//# sourceMappingURL=post-likes-comments.js.map