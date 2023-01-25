"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const sequelize_1 = require("sequelize");
// node= nombre de la db, root=usuario, password del root
const db = new sequelize_1.Sequelize('node', 'root', '123456789', {
    host: 'localhost',
    dialect: 'mysql', //que tipo de db es, mysql
    // logging: false,    //el sql sale desde la consola de la terminal
});
exports.default = db;
//# sourceMappingURL=connection.js.map