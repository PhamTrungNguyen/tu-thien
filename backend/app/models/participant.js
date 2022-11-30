module.exports = (sequelize, DataTypes) => {

    const Participant = sequelize.define("participants", {
        userID: {
            type: DataTypes.INTEGER,
            allowNull: false,

        },
        lead: {
            type: DataTypes.BOOLEAN,
            defaultValue: false,
            allowNull: true
        },

    }, {
        timestamps: false //ko render createdAt and updatedAt
    }
    )

    return Participant

}