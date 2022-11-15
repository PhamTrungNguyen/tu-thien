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
const getAllPostService = async (query) => {
    const { limit } = query
    const post = await Post.findAll({ limit: limit || 2 })
    return post;
}
/* ---------- Phân trang bài viết ----------  */
const getLimitPostService = async (query) => {
    const { limit } = query
    let offset = 0 + (query.offset - 1) * limit
    const post = await Posts.findAndCountAll({
        offset: offset,
        limit: +limit || 4,
        order: [
            ['date', 'ASC']
        ]
    })
    // const post = await Post.findAll({
    //     limit: +limit || 4,
    //     offset: +offset

    // });
    return post;
}
/* ---------- Đếm tổng số bài viết ----------  */
const getCountPostService = async () => {
    const post = await Post.count()
    return post;
}
module.exports = {
    addPostService,
    getAllPostService,
    getLimitPostService,
    getCountPostService
}
