"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const sequelize_1 = require("sequelize");
const connection_1 = __importDefault(require("../db/connection"));
const usuario_1 = __importDefault(require("./usuario"));
const roles_1 = __importDefault(require("./roles"));
const userRoles = connection_1.default.define('user_roles', {
    u_id: {
        type: sequelize_1.DataTypes.INTEGER
    },
    r_id: {
        type: sequelize_1.DataTypes.INTEGER
    },
}, {
    timestamps: false
});
usuario_1.default.belongsToMany(roles_1.default, { as: 'usuario_id', through: { model: userRoles }, foreignKey: 'u_id' });
roles_1.default.belongsToMany(usuario_1.default, { as: 'rol_id', through: { model: userRoles }, foreignKey: 'r_id' });
exports.default = userRoles;
//# sourceMappingURL=user-roles.js.map