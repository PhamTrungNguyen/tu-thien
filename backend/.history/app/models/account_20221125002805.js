module.exports = (sequelize, DataTypes) => {

    const Account = sequelize.define("accounts", {
        username: {
            type: DataTypes.STRING,
            allowNull: false,

        },
        password: {
            type: DataTypes.STRING,
            allowNull: false
        },


    }, {
        timestamps: false //ko render createdAt and updatedAt
    }
    )

    return Account

}