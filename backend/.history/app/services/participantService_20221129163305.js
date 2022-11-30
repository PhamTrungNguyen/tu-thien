const db = require('../models')
const Participant = db.participants
const Post = db.posts

/* ---------- Thêm participant ----------  */
const addParticipantService = async (body) => {
    // console.log("🚀 ~ file: postService.js ~ line 9 ~ addPostService ~ body", body)
    let info = {
        userID: body.userID,
        lead: body.status,
        postId: body.postId,
    };
    await Participant.create(info);
    // let values = {
    //     displayName: body.displayName,
    //     email: body.email,
    //     totalMoney: (parseInt(body.totalMoney)).toString()
    // }
    const post = await Post.update({}, { where: { id: idAccount } });
    return { status: 200, message: "Nhận hỗ trợ thành công !!!", message_number: "Tham gia hỗ trợ thành công !!!" };
};
module.exports = {
    addParticipantService,
}