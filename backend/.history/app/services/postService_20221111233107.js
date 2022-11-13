
const db = require('../models')
const Account = db.accounts
const Post = db.posts

// main work
/* ---------- Thêm tài khoản ----------  */
const addPostService = async (body) => {
    let info = {
        title: body.title,
        desc: body.title,
        hot: body.hot,
        image_url: body.image_url,
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
