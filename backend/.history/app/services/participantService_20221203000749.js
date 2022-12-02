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
    const post = await Post.update({ status: 2 }, { where: { id: info.postId } });
    return { status: 200, message: "Nhận hỗ trợ thành công !!!", message_number: "Tham gia hỗ trợ thành công !!!" };
};
/* ---------- getall participant where lead=1 ----------  */
const getAllParticipantByLeadService = async (query) => {
    const participant = await Participant.findAll({ where: { lead: 1 } });
    return participant;
};
/* ---------- getall participant where postId ----------  */
const getAllParticipantByPostIdService = async (query) => {
    const { postId } = query
    console.log("🚀 ~ file: participantService.js:24 ~ getAllParticipantByPostIdService ~ postId", postId)
    const participant = await Participant.findAll({ where: { postId: postId } });
    return participant;
};
/* ---------- Count participant where postId ----------  */
const getCountParticipantByPostIdService = async (query) => {
    const { postId } = query
    const participant = await Participant.count({ where: { postId: postId } });
    return participant;
};
/* ---------- get participant by userId ----------  */
const getParticipantByIdService = async (query) => {
    const { userId } = query;
    const participant = await Participant.findOne({ where: { userId: userId } });
    return participant;
};
module.exports = {
    addParticipantService,
    getAllParticipantByLeadService,
    getParticipantByIdService,
    getAllParticipantByPostIdService,
    getCountParticipantByPostIdService
}