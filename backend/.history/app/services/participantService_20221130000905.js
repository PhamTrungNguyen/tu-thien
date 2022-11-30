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
/* ---------- get participant by id ----------  */
const getParticipantByIdService = async (query) => {
    const { userId } = query;
    console.log("🚀 ~ file: participantService.js ~ line 24 ~ getParticipantByIdService ~ userId", userId)
    const participant = await Participant.findByPk(userId)
    return participant;
};
module.exports = {
    addParticipantService,
    getAllParticipantByLeadService,
    getParticipantByIdService,
}