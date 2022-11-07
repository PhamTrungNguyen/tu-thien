module.exports = (sequelize, DataTypes) => {

    const Roles = sequelize.define("roles", {
        role_name: {
            type: DataTypes.,
            allowNull: false
        },
    })

    return Roles

}