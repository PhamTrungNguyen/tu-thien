module.exports = (sequelize, DataTypes) => {

    const Post = sequelize.define("posts", {
        username: {
            type: DataTypes.STRING,
            allowNull: false
        },
        password: {
            type: DataTypes.STRING,
            allowNull: false
        },

    }, {
        timestamps: true //ko render createdAt and updatedAt
    }
    )

    return Post

}