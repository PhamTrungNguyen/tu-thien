module.exports = (sequelize, DataTypes) => {

    const Roles = sequelize.define("roles", {
        role_name: {
            type: DataTypes.INTEGER,
            allowNull: false
        },
    })

    return Roles

}