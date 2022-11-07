module.exports = (sequelize, DataTypes) => {

    const Account = sequelize.define("accounts", {
        username: {
            type: DataTypes.STRING,
            allowNull: false
        },
        password: {
            type: DataTypes.STRING,
            allowNull: false
        },
    })

    return Account

}