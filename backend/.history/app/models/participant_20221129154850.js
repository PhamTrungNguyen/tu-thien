module.exports = (sequelize, DataTypes) => {

    const Participant = sequelize.define("participants", {
        userID: {
            type: DataTypes.STRING,
            allowNull: false,

        },
        lead: {
            type: DataTypes.BOOLEAN,
            allowNull: true
        },

    }, {
        timestamps: false //ko render createdAt and updatedAt
    }
    )

    return Participant

}