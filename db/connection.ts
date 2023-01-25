import { Sequelize } from 'sequelize';

// node= nombre de la db, root=usuario, password del root
const db = new Sequelize('node', 'root', '123456789', {
    host: 'localhost',     // donde se hostea la db,
    dialect: 'mysql',     //que tipo de db es, mysql
    // logging: false,    //el sql sale desde la consola de la terminal
});


export default db;