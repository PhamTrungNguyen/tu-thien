const { QueryTypes } = require("sequelize");

const db = require("../models");
const Donate = db.donates;
/* ---------- Thêm donate ----------  */
const addDonateService = async (body) => {
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