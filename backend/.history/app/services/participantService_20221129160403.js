const db = require('../models')
const Participant = db.participants
const Post = db.posts

/* ---------- Thêm participant ----------  */
const addPostService = async (body) => {
    // console.log("🚀 ~ file: postService.js ~ line 9 ~ addPostService ~ body", body)
    let info = {
        userID: body.userID,
        lead: body.status,
    };
    await Post.create(info);
    return { status: 200, message: "Nhận hỗ trợ thành công !!!", message_lead: "Tham gia hỗ trợ thành công !!!" };
};
module.exports = {
    addPostService,
}