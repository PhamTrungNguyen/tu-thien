module.exports = (sequelize, DataTypes) => {

    const Comment = sequelize.define("comments", {
        userID: {
            type: DataTypes.INTEGER,
            allowNull: false,

        },
        text: {
            type: DataTypes.STRING,
            allowNull: false
        },
        hot: {
            type: DataTypes.BOOLEAN,
            defaultValue: false
        }

    }, {
        timestamps: false //ko render createdAt and updatedAt
    }
    )

    return Comment

}