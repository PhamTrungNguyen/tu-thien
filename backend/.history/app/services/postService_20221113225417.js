const { QueryTypes } = require("sequelize");

const db = require("../models");
const Account = db.accounts;
const Post = db.posts;

/* ---------- Thêm bài viết ----------  */
const addPostService = async (body) => {
    // console.log("🚀 ~ file: postService.js ~ line 9 ~ addPostService ~ body", body)
    let info = {
        title: body.title,
        desc: body.desc,
        hot: body.hot,
        image: body.image_url,
        accountId: body.accountId,
    };
    await Post.create(info);
    return { status: 200, message: "Thêm bài viết thành công !!!" };
};
/* ---------- lấy all bài viết hot ----------  */
const getAllPostHotService = async (query) => {
    const { limit } = query;
    const post = await Post.findAll({ limit: +limit || 4, where: { hot: true } });
    return post;
};
/* /* ---------- lấy all bài viết no hot ----------  */
const getAllPostNoHotService = async (query) => {
    const { limit } = query;
    const post = await Post.findAll({ limit: +limit || 4, where: { hot: false } });
    return post;
};
/* ---------- lấy  bài viết by id ----------  */
const getPostByIdService = async (query) => {
    const { idPost } = query;
    console.log("🚀 ~ file: postService.js ~ line 35 ~ getPostByIdService ~ idPost", idPost)
    const post = await Post.findByPk(idPost)
    return post;
};
/* ---------- Xóa  bài viết by id ----------  */
const DeletePostByIdService = async (query) => {
    const { idPost } = query;
    console.log("🚀 ~ file: postService.js ~ line 35 ~ getPostByIdService ~ idPost", idPost)
    return Post.destroy({ where: { id: +idPost } })

};
/* ---------- Phân trang bài viết và đếm count ----------  */
const getLimitPostService = async (query) => {
    const { limit } = query;
    let offset = 0 + (+query.offset - 1) * +limit;
    const post = await Post.findAndCountAll({
        offset: offset,
        limit: +limit || 4,
    });
    return post;
};

module.exports = {
    addPostService,
    getAllPostHotService,
    getLimitPostService,
    getAllPostNoHotService,
    getPostByIdService,
    DeletePostByIdService
};
