const { QueryTypes } = require('sequelize');

const db = require('../models')
const Account = db.accounts
const Post = db.posts


/* ---------- Thêm bài viết ----------  */
const addPostService = async (body) => {
    // console.log("🚀 ~ file: postService.js ~ line 9 ~ addPostService ~ body", body)
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
/* ---------- lấy all bài viết ----------  */
const getAllPostService = async () => {
    const post = await db.sequelize.query("SELECT * FROM posts", { type: QueryTypes.SELECT })
    return post;
}
/* ---------- Phân trang bài viết ----------  */
const getLimitPostService = async (query) => {
    const { offset } = query
    console.log("🚀 ~ file: postService.js ~ line 30 ~ getLimitPostService ~ offset", offset)
    const post = await Post.findAll({
        limit: 4,
        offset: +(offset)

    });
    return post;
}

module.exports = {
    addPostService,
    getAllPostService,
    getLimitPostService
}
