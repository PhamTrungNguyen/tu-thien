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
        displayName: {
            type: DataTypes.STRING,
            allowNull: true
        },
        email: {
            type: DataTypes.STRING,
            allowNull: true
        },
        totalMoney: {
            type: DataTypes.STRING,
            allowNull: true,
            defaultValue: 0
        },


    }, {
        timestamps: false //ko render createdAt and updatedAt
    }
    )

    return Account

}