module.exports = (sequelize, DataTypes) => {

    const Participant = sequelize.define("participants", {
        userID: {
            type: DataTypes.STRING,
            allowNull: false,

        },
        money: {
            type: DataTypes.DOUBLE,
            allowNull: false
        },

    }, {
        timestamps: false //ko render createdAt and updatedAt
    }
    )

    return Donate

}