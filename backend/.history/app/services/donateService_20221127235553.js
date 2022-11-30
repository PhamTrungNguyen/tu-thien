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
const getDonateIDByPostIDService = async (query) => {
    const { postId } = query
    const postDonate = await PostDonate.findAll({ where: { postId: postId } });
    return postDonate;
};
/* ---------- Lấy ra donate theo donateId ----------  */
const getDonateByDonateIDService = async (query) => {
    // const { donateId } = query
    // const postDonate = await Donate.findAll({ where: { id: donateId } });
    const postDonate = await db.sequelize.query("SELECT donates.money AS donates,FROM donates JOIN postdonates ON donates.id = products.id",
        {
            replacements: { status: 'active' },
            type: QueryTypes.SELECT
        });
    return postDonate;
};
module.exports = {
    addDonateService,
    getDonateIDByPostIDService,
    getDonateByDonateIDService
};
