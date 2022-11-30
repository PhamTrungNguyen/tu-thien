const { QueryTypes } = require("sequelize");

const db = require("../models");
const Donate = db.donates;
const Post = db.posts;
/* ---------- Thêm donate ----------  */
const addDonateService = async (body) => {
    // await Donate.create({
    //     firstName: "Lucas",
    //     Classes: [{
    //         id: body.postID,
    //     }]
    // }, {
    //     include: Class
    // });
    await Donate.create({
        firstName: "Lucas",
        Post: [{
            id: body.postID,
        }]
    }, {
        include: Post
    });
    return { status: 200, message: "Thêm bài viết thành công !!!" };
};