module.exports = (sequelize, DataTypes) => {

    const Donate = sequelize.define("donates", {
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