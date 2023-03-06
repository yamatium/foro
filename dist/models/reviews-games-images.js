"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const sequelize_1 = require("sequelize");
const connection_1 = __importDefault(require("../db/connection"));
const usuario_1 = __importDefault(require("./usuario"));
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
    userReview_id: {
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
//Usuario.belongsToMany(Reviews, {  as: 'usuarioReview_id', through: { model: Reviews}, foreignKey: 'userReview_id' });
usuario_1.default.hasMany(Reviews, { as: 'userReview_id' });
Games.belongsToMany(usuario_1.default, { as: 'game_id', through: { model: Reviews }, foreignKey: 'g_id' });
const Images = connection_1.default.define('images', {
    url: {
        type: sequelize_1.DataTypes.STRING
    },
    userI_id: {
        type: sequelize_1.DataTypes.INTEGER
    },
    games_id: {
        type: sequelize_1.DataTypes.INTEGER
    },
    postI_id: {
        type: sequelize_1.DataTypes.INTEGER
    }
}, {
    timestamps: false
});
usuario_1.default.hasMany(Images, { as: 'userI_id' });
Games.hasMany(Images, { as: 'games_id' });
//Posts.hasMany   ( Images, { as: 'postI_id'}  );
exports.default = Reviews;
Games;
Images;
//# sourceMappingURL=reviews-games-images.js.map