
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
    const { donateId } = query
    const postDonate = await Donate.findAll({ where: { id: donateId } });
    return postDonate;
};
/* ---------- sum donate ----------  */
const getSumDonateService = async (query) => {
    const postDonate = await Donate.sum("money");
    return postDonate;
};
/* ---------- sum donate where userID ----------  */
const getCountParticipantByUserIdService = async (query) => {
    const { userId } = query
    const postDonate = await Donate.sum({
        where: {
            userID: userId
        }
    });
    return { postDonate, userId };
};
module.exports = {
    addDonateService,
    getDonateIDByPostIDService,
    getDonateByDonateIDService,
    getSumDonateService
};
