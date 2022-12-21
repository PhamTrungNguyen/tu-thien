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
        myColData: (body.myColData),
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
/* ---------- lấy all bài viết no hot ----------  */
const getAllPostRelateService = async (query) => {
    const { limit, hot } = query;
    const post = await Post.findAll({ limit: +limit || 4, where: { hot: hot } });
    return post;
};
/* ---------- lấy  bài viết by id ----------  */
const getPostByIdService = async (query) => {
    const { idPost } = query;
    const post = await Post.findByPk(idPost)

    return post;
};
/* ----------  ----------  */
const postMoneyService = async (query) => {
    const { userId, idPost } = query;
    console.log("🚀 ~ file: postService.js ~ line 43 ~ postMoneyService ~ userId", userId)
    const post = await Post.findByPk(idPost)
    console.log("🚀 ~ file: postService.js ~ line 45 ~ postMoneyService ~ post", post)
    // const data = {
    //     ...post,
    //     myColData: post.myColData.push(userId)
    // }
    const myColData = [...post.myColData, userId]
    console.log("🚀 ~ file: postService.js ~ line 47 ~ postMoneyService ~ myColData", myColData)
    Post.update({ myColData }, { where: { id: idPost } })

    return [];
};
/* ---------- Xóa  bài viết by id ----------  */
const DeletePostByIdService = async (query) => {
    const { idPost } = query;
    console.log("🚀 ~ file: postService.js ~ line 35 ~ getPostByIdService ~ idPost", idPost)

    const post = await Post.destroy({ where: { id: +idPost } })
    if (post === 1) {
        return { status: 200, message: "yes" }
    }
    return { status: 400, message: "no" }
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
/* ---------- Cập nhập post ----------  */
const UpdatePostByPostIdService = async (query, body) => {
    const { postId } = query
    // const moneyUser = oleAccount.
    let values = {
        desc: body.desc,
        hot: body.hot,
        image: body.image_url,
        title: body.title,
        totalParticipant: body.totalParticipant,
        totalMoney: body.totalMoney,
        date: body.date,
    }
    const post = await Post.update(values, { where: { id: postId } });
    return { post, message: "Cập nhập thành công" }
}
/* ---------- Count post ----------  */
const getCountPostService = async (query) => {
    const post = await Post.count();
    console.log("🚀 ~ file: postService.js:100 ~ getCountPostService ~ post", post)
    return post;
};
module.exports = {
    addPostService,
    getAllPostHotService,
    getLimitPostService,
    getAllPostNoHotService,
    getPostByIdService,
    DeletePostByIdService,
    postMoneyService,
    getAllPostRelateService,
    UpdatePostByPostIdService,
    getCountPostService
};
