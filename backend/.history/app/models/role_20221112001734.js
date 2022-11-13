module.exports = (sequelize, DataTypes) => {

    const Roles = sequelize.define("roles", {
        role_name: {
            type: DataTypes.INTEGER,
            allowNull: false
        },
        references: {
            model: 'Posts',
            key: 'idPost'
        }
    }, {
        updatedAt: false,
    })

    return Roles

}