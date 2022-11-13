
const db = require('../models')
const Account = db.accounts
const Post = db.posts


/* ---------- Thêm tài khoản ----------  */
const addPostService = async (body) => {
    console.log("🚀 ~ file: postService.js ~ line 9 ~ addPostService ~ body", body)
    let info = {
        title: body.title,
        desc: body.desc,
        hot: body.hot,
        image: body.image_url,
        accountId: body.accountId
    }
    await Post.create(info)
    return { status: 200, message: 'Thêm bài viết thành công !!!' }

}

module.exports = {
    addPostService
}
