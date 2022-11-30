module.exports = (sequelize, DataTypes) => {

    const Account = sequelize.define("accounts", {

    }, {
        timestamps: false //ko render createdAt and updatedAt
    }
    )

    return Account

}