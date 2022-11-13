
const db = require('../models')
const Account = db.accounts
const Post = db.posts

// main work
/* ---------- Thêm tài khoản ----------  */
const addPostService = async (body) => {
    let info = {
        title: body.title,
        password: await bcrypt.hash(body.password, 10),
        role_name: body.role_name,
    }
    const isCheck = await Account.findOne({ where: { username: body.username } })
    if (isCheck) {
        return { status: 400, message: 'Tài khoản đã tồn tại !!!' }
    }
    else {
        await Account.create(info)
        return { status: 200, message: 'Tạo tài khoản thành công !!!' }
    }
}

module.exports = {
    addAccountService
}
