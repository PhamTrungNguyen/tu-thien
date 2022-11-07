module.exports = (sequelize, DataTypes) => {

    const Product = sequelize.define("roles", {
        title: {
            type: DataTypes.STRING,
            allowNull: false
        },
    })

    return Product

}