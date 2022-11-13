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
db.posts = require('./post')(sequelize, DataTypes)

db.sequelize.sync({ alter: true })
    .then(() => {
        console.log('yes re-sync done!')
    })
/* 
User.sync() - Điều này tạo ra bảng nếu nó không tồn tại (và không làm gì nếu nó đã tồn tại)
User.sync({ force: true }) - Thao tác này sẽ tạo ra bảng, loại bỏ nó trước nếu nó đã tồn tại
User.sync({ alter: true }) - Thao tác này kiểm tra trạng thái hiện tại của bảng trong cơ sở dữ liệu (nó có các cột nào, kiểu dữ liệu của chúng là gì, v.v.), sau đó thực hiện các thay đổi cần thiết trong bảng để làm cho bảng phù hợp với mô hình
 */


// 1 to Many Relation
/* ---------------- role-account(1-n) ----------------*/
db.roles.hasMany(db.accounts, {
    foreignKey: 'role_name',
    as: 'account'
})

db.accounts.belongsTo(db.roles, {
    foreignKey: 'role_name',
    as: 'role'
})
/* ---------------- post-account(1-n) ----------------*/
db.accounts.hasMany(db.posts, {
    foreignKey: 'accountId',

})
db.posts.belongsTo(db.accounts, {

})



module.exports = db