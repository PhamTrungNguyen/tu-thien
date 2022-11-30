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
            id: 15,
            title: "123123",
            hot: "1",
            desc: "213123",
            image: "http://res.cloudinary.com/drx9ycs46/image/upload/v1669432002/pbl4/iuzo1hwbejy2irgzlgxq.png"
        }]
    }, {
        include: Post
    });
    return { status: 200, message: "Thêm donate thành công !!!" };
};
module.exports = {
    addDonateService,
};
