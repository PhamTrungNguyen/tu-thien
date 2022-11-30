module.exports = (sequelize, DataTypes) => {

    const Participant = sequelize.define("participants", {
        userID: {
            type: DataTypes.STRING,
            allowNull: false,

        },
        lead: {
            type: DataTypes.BOOLEAN,
            allowNull: false
        },

    }, {
        timestamps: false //ko render createdAt and updatedAt
    }
    )

    return Donate

}