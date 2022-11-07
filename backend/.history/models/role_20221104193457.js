module.exports = (sequelize, DataTypes) => {

    const Roles = sequelize.define("roles", {
        title: {
            type: DataTypes.STRING,
            allowNull: false
        },
    })

    return Roles

}