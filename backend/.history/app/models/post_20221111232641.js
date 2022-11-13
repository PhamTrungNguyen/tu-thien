module.exports = (sequelize, DataTypes) => {

    const Post = sequelize.define("posts", {
        title: {
            type: DataTypes.STRING,
            allowNull: false
        },
        hot: {
            type: DataTypes.BOOLEAN,
            allowNull: false
        },
        status: {
            type: DataTypes.INTEGER,
            allowNull: false
        },
        content: {
            type: DataTypes.STRING,
            allowNull: false
        },
        image: {
            type: DataTypes.STRING,
            allowNull: false
        },
        review: {
            type: DataTypes.STRING,
            allowNull: false
        },
        money: {
            type: DataTypes.DOUBLE,
            allowNull: false
        },

    }, {
        timestamps: true //ko render createdAt and updatedAt
    }
    )

    return Post

}