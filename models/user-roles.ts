import { DataTypes} from 'sequelize';
import db from '../db/connection';
import Usuario from './usuario';
import Roles from './roles';


const userRoles = db.define('user_roles', {

    u_id: {
        type: DataTypes.INTEGER
    },
    r_id: {
        type: DataTypes.INTEGER
    },

}, {
    timestamps: false
});

Usuario.belongsToMany(Roles, { as: 'usuario_id', through: { model: userRoles}, foreignKey: 'u_id' });
Roles.belongsToMany(Usuario, { as: 'rol_id', through: { model: userRoles}, foreignKey: 'r_id' });


export default userRoles; 