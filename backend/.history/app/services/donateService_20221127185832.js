const { QueryTypes } = require("sequelize");

const db = require("../models");
const Donate = db.donates;
const Post = db.posts;
/* ---------- Thêm donate ----------  */
const addDonateService = async (body) => {
    await Donate.create({
        money: body.money,
        userID: body.userID,
        Post: [{
            id: body.postID,
        }]
    }, {
        include: Post
    });
    return { status: 200, message: "Thêm bài viết thành công !!!" };
};
module.exports = {
    addDonateService,
};
