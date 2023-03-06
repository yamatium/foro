import { DataTypes} from 'sequelize';
import db from '../db/connection';
import Usuario from './usuario';
import Posts from './post-likes-comments';





const Games = db.define('games', {
    name: {
        type: DataTypes.STRING
    },
    description: {
        type: DataTypes.STRING
    },

}, {
    timestamps: false
});


const Reviews = db.define('reviews', {
    userReview_id: {
        type: DataTypes.INTEGER
    },
    g_id: {
        type: DataTypes.INTEGER
    },
    description: {
        type: DataTypes.STRING
    },
    value: {
        type: DataTypes.INTEGER
    }
}, {
    timestamps: false
});

//Usuario.belongsToMany(Reviews, {  as: 'usuarioReview_id', through: { model: Reviews}, foreignKey: 'userReview_id' });
Usuario.hasMany ( Reviews, { as: 'userReview_id'});
Games.belongsToMany(Usuario, { as: 'game_id', through: { model: Reviews}, foreignKey: 'g_id' });





const Images = db.define('images', {
    url: {
        type: DataTypes.STRING
    },
    userI_id: {
        type: DataTypes.INTEGER
    },
    games_id: {
        type: DataTypes.INTEGER
    },
    postI_id: {
        type: DataTypes.INTEGER
    }
}, {
    timestamps: false
});

Usuario.hasMany ( Images, { as: 'userI_id' } );
Games.hasMany   ( Images, { as: 'games_id'  } );
//Posts.hasMany   ( Images, { as: 'postI_id'}  );





export default Reviews; Games; Images;