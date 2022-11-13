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
            allowNull: true,
            defaultValue: 1

        },
        desc: {
            type: DataTypes.STRING,
            allowNull: false
        },
        image: {
            type: DataTypes.STRING,
            allowNull: false
        },
        review: {
            type: DataTypes.STRING,
            allowNull: true
        },
        money: {
            type: DataTypes.DOUBLE,
            allowNull: true
        },

    }, {
        timestamps: true //ko render createdAt and updatedAt
    }
    )

    return Post

}