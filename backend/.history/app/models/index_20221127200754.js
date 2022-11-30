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
const PostDonates = sequelize.define('PostDonates')
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
db.donates = require('./donate')(sequelize, DataTypes)
db.PostDonates = PostDonates

db.sequelize.sync({ alter: true })
    .then(() => {
        console.log('yes re-sync done!')
    })
/* 
User.sync() - Điều này tạo ra bảng nếu nó không tồn tại (và không làm gì nếu nó đã tồn tại)
User.sync({ force: true }) - Thao tác này sẽ tạo ra bảng, loại bỏ nó trước nếu nó đã tồn tại
User.sync({ alter: true }) - Thao tác này kiểm tra trạng thái hiện tại của bảng trong cơ sở dữ liệu (nó có các cột nào, kiểu dữ liệu của chúng là gì, v.v.), sau đó thực hiện các thay đổi cần thiết trong bảng để làm cho bảng phù hợp với mô hình
 */



/* ---------------- role-account(1-n) ----------------*/
db.roles.hasMany(db.accounts)
db.accounts.belongsTo(db.roles)
/* ---------------- post-account(1-n) ----------------*/
db.accounts.hasMany(db.posts)
db.posts.belongsTo(db.accounts)
/* ---------------- post-donate(n-n) ----------------*/

db.posts.belongsToMany(db.donates, { through: PostDonates });
db.donates.belongsToMany(db.posts, { through: PostDonates });



module.exports = db