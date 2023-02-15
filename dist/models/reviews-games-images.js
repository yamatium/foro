"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const sequelize_1 = require("sequelize");
const connection_1 = __importDefault(require("../db/connection"));
const usuario_1 = __importDefault(require("./usuario"));
const post_likes_comments_1 = __importDefault(require("./post-likes-comments"));
const Games = connection_1.default.define('games', {
    name: {
        type: sequelize_1.DataTypes.STRING
    },
    description: {
        type: sequelize_1.DataTypes.STRING
    },
}, {
    timestamps: false
});
const Reviews = connection_1.default.define('reviews', {
    user_id: {
        type: sequelize_1.DataTypes.INTEGER
    },
    g_id: {
        type: sequelize_1.DataTypes.INTEGER
    },
    description: {
        type: sequelize_1.DataTypes.STRING
    },
    value: {
        type: sequelize_1.DataTypes.INTEGER
    }
}, {
    timestamps: false
});
usuario_1.default.belongsToMany(Reviews, { as: 'usuario_id', through: { model: Reviews }, foreignKey: 'user_id' });
Games.belongsToMany(usuario_1.default, { as: 'game_id', through: { model: Reviews }, foreignKey: 'g_id' });
const Images = connection_1.default.define('images', {
    url: {
        type: sequelize_1.DataTypes.STRING
    },
    userI_id: {
        type: sequelize_1.DataTypes.INTEGER
    },
    game_id: {
        type: sequelize_1.DataTypes.INTEGER
    },
    postI_id: {
        type: sequelize_1.DataTypes.INTEGER
    }
}, {
    timestamps: false
});
usuario_1.default.hasMany(Images, { as: 'userI_id' });
Games.hasMany(Images, { as: 'game_id' });
post_likes_comments_1.default.hasMany(Images, { as: 'postI_id' });
exports.default = Reviews;
Games;
Images;
//# sourceMappingURL=reviews-games-images.js.map