module.exports = (sequelize, DataTypes) => {

    const Roles = sequelize.define("roles", {
        role_name: {
            type: DataTypes.STRING,
            allowNull: false
        },
    })

    return Roles

}