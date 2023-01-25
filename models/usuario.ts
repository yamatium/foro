import { DataTypes} from 'sequelize';
import db from '../db/connection';


const Usuario = db.define('Usuario', {
    nombre: {
        type: DataTypes.STRING
    },
    email: {
        type: DataTypes.STRING
    },
    password: {
        type: DataTypes.STRING
    },
    estado: {
        type: DataTypes.BOOLEAN
    }
    
}, {
    timestamps: false
});

// modelo definido para los endpoints ,  arma los sqlQuery   , video 261

export default Usuario;