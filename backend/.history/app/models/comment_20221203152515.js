module.exports = (sequelize, DataTypes) => {

    const Comment = sequelize.define("comments", {
        userID: {
            type: DataTypes.STRING,
            allowNull: false,

        },
        text: {
            type: DataTypes.STRING,
            allowNull: false
        },

    }, {
        timestamps: false //ko render createdAt and updatedAt
    }
    )

    return Comment

}