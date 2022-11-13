
const db = require('../models')
const Account = db.accounts
const Post = db.posts

// main work
/* ---------- Thêm tài khoản ----------  */
const addPostService = async (body) => {
    let info = {
        title: body.title,
        desc: body.desc,
        hot: body.hot,
        image_url: body.image_url,
    }
    await Post.create(info)
    return { status: 200, message: 'Thêm bài viết thành công !!!' }

}

module.exports = {
    addPostService
}
