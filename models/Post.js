
let _ = require("lodash");

module.exports = (db, DataTypes) => {

    let Post = db.define("Post", {

        post_id: {
            type: DataTypes.INTEGER,
            autoIncrement: true,
            allowNull: false,
            primaryKey: true
        },
        slug: {
            type: DataTypes.STRING,
            allowNull: false
        },
        title: {
            type: DataTypes.STRING,
            allowNull: false
        },
        content: {
            type: DataTypes.TEXT,
            allowNull: false
        },
        publish: {
            type: DataTypes.BOOLEAN,
            allowNull: false,
            defaultValue: 0
        },
        created_by: {
            type: DataTypes.INTEGER,
            allowNull: false
        }
    }, {
        tableName: "post",
        underscored: true,

    });

    Post.associate = function (models) {
        Post.belongsTo(models.User, {foreignKey: "created_by"});
        Post.hasMany(models.Post_Photo, {foreignKey: "post_id"})
    };

    return Post;
};