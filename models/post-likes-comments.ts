import { DataTypes} from 'sequelize';
import db from '../db/connection';
import Usuario from './usuario';
import Reviews from './reviews-games-images';


const Posts = db.define('posts', {
    title: {
        type: DataTypes.STRING
    },
    description: {
        type: DataTypes.STRING
    },
    user_id: {
        type: DataTypes.INTEGER
    },

}, {
    timestamps: false
});


Usuario.hasMany(Posts, { as: 'user_id' } );
//Posts.belongsTo(Usuario);


const Comments = db.define('comments', {
    body: {
        type: DataTypes.STRING
    },
    post_id: {
        type: DataTypes.INTEGER
    },
    u_id: {
        type: DataTypes.INTEGER
    },
    review_id: {
        type: DataTypes.INTEGER
    },
}, {
    timestamps: false
});

Usuario.hasMany(Comments, { as: 'u_id'     } );
Posts.hasMany(Comments,   { as: 'post_id'  } );
Reviews.hasMany(Comments, { as: 'review_id'} );
// falta review
//Comments.hasOne( Usuario);


const Likes = db.define('likes', {
    value: {
        type: DataTypes.BOOLEAN
    },
    p_id: {
        type: DataTypes.INTEGER
    },
    reviews_id: {
        type: DataTypes.INTEGER
    },
    users_id: {
        type: DataTypes.INTEGER
    },
}, {
    timestamps: false
});

Posts.hasMany  ( Likes, { as: 'p_id'       } );
Reviews.hasMany( Likes, { as: 'reviews_id' } );
Usuario.hasMany( Likes, { as: 'users_id'   } );


export default Posts; Comments; Likes; 