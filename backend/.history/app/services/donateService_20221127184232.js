const { QueryTypes } = require("sequelize");

const db = require("../models");
const Donate = db.donates;
const Post = db.posts;
/* ---------- Thêm donate ----------  */
const addDonateService = async (body) => {
    // console.log("🚀 ~ file: postService.js ~ line 9 ~ addPostService ~ body", body)
    // let info = {
    //     title: body.title,
    //     desc: body.desc,
    //     hot: body.hot,
    //     image: body.image_url,
    //     myColData: (body.myColData),
    //     accountId: body.accountId,
    // };
    await Donate.create({
        firstName: "Lucas",
        Post: [{
            id: body.postID,
        }]
    }, {
        include: Class
    });
    return { status: 200, message: "Thêm bài viết thành công !!!" };
};