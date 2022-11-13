module.exports = (sequelize, DataTypes) => {

    const Post = sequelize.define("posts", {
        title: {
            type: DataTypes.STRING,
            allowNull: false
        },
        outstanding: {
            type: DataTypes.BOOLEAN,
            allowNull: false
        },

    }, {
        timestamps: true //ko render createdAt and updatedAt
    }
    )

    return Post

}