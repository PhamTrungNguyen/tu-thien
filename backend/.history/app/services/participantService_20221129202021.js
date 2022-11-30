const db = require('../models')
const Participant = db.participants
const Post = db.posts

/* ---------- Thêm participant ----------  */
const addParticipantService = async (body) => {
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
    const post = await Post.update({ status: 2 }, { where: { id: info.postId } });
    return { status: 200, message: "Nhận hỗ trợ thành công !!!", message_number: "Tham gia hỗ trợ thành công !!!" };
};/* ---------- getall participant where lead=1 ----------  */
const getDonateByDonateIDService = async (query) => {
    const postDonate = await Participant.findAll({ where: { lead: 1 } });
    return postDonate;
};
module.exports = {
    addParticipantService,
}