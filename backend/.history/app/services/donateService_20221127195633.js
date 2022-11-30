const { QueryTypes } = require("sequelize");

const db = require("../models");
const Donate = db.donates;
const Post = db.posts;
/* ---------- Thêm donate ----------  */
const addDonateService = async (body) => {
    const post = Post.findByPk(body.postID);
    console.log("🚀 ~ file: donateService.js ~ line 9 ~ addDonateService ~ post", post)
    await Donate.create({
        money: body.money,
        userID: body.userID,
        posts: [post]
    }, {
        include: Post
    });
    return { status: 200, message: "Thêm donate thành công !!!" };
};
module.exports = {
    addDonateService,
};
