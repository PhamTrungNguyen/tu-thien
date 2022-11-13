const dbConfig = require('../config/dbConfig.js');

const { Sequelize, DataTypes } = require('sequelize');
/* Tạo connection pool */
const sequelize = new Sequelize(
    dbConfig.DB,
    dbConfig.USER,
    dbConfig.PASSWORD, {
    host: dbConfig.HOST,
    dialect: dbConfig.dialect,
    operatorsAliases: false,

    pool: {
        max: dbConfig.pool.max,
        min: dbConfig.pool.min,
        acquire: dbConfig.pool.acquire,
        idle: dbConfig.pool.idle

    }
}
)
/* Testing the connection */
sequelize.authenticate()
    .then(() => {
        console.log('connected..')
    })
    .catch(err => {
        console.log('Error' + err)
    })

const db = {}

db.Sequelize = Sequelize
db.sequelize = sequelize

db.roles = require('./role')(sequelize, DataTypes)
db.accounts = require('./account')(sequelize, DataTypes)

db.sequelize.sync({ force: false })
    .then(() => {
        console.log('yes re-sync done!')
    })
/* 
User.sync() - Điều này tạo ra bảng nếu nó không tồn tại (và không làm gì nếu nó đã tồn tại)
User.sync({ force: true }) - Thao tác này sẽ tạo ra bảng, loại bỏ nó trước nếu nó đã tồn tại
User.sync({ alter: true }) - This checks what is the current state of the table in the database (which columns it has, what are their data types, etc), and then performs the necessary changes in the table to make it match the model.
 */


// 1 to Many Relation
/* ---------------- Auth ----------------*/
db.roles.hasMany(db.accounts, {
    foreignKey: 'role_name',
    as: 'account'
})

db.accounts.belongsTo(db.roles, {
    foreignKey: 'role_name',
    as: 'role'
})





module.exports = db