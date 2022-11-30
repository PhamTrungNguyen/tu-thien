const { QueryTypes } = require("sequelize");

const db = require("../models");
const Donate = db.donates;
const Post = db.posts;
const PostDonate = db.PostDonates;
/* ---------- Thêm donate ----------  */
const addDonateService = async (body) => {
    const post = await Post.findByPk(body.postID);
    console.log("🚀 ~ file: donateService.js ~ line 9 ~ addDonateService ~ post", post)
    const donate = await Donate.create({
        money: body.money.replace(/,/g, ""),
        userID: body.userID,
    });
    await PostDonate.create({
        postId: body.postID,
        donateId: donate.id
    })
    return { status: 200, message: "Đóng góp thành công" };
};
/* ---------- Lấy ra donateId theo postId ----------  */
const GetDonateIDByPostIDService = async (query) => {
    const { postId } = query
    const postDonate = await db.PostDonates.findAll({ where: { postId: postId } });
    console.log("🚀 ~ file: donateService.js ~ line 24 ~ GetDonateIDByPostIDService ~ postDonate", postDonate)

    return { status: 200 };
};
module.exports = {
    addDonateService,
    GetDonateIDByPostIDService,
};
