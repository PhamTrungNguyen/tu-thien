const { QueryTypes } = require("sequelize");

const db = require("../models");
const Donate = db.donates;
const Post = db.posts;
/* ---------- Thêm donate ----------  */
const addDonateService = async (body) => {
    await Donate.create({
        money: body.money,
        userID: body.userID,
        posts: [{
            title: "123123",
        }]
    }, {
        include: Post
    });
    return { status: 200, message: "Thêm donate thành công !!!" };
};
module.exports = {
    addDonateService,
};
