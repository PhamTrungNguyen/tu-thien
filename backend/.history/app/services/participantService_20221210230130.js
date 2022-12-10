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
/* ---------- getall participant where lead=1 and post id ----------  */
const getAllParticipantByLeadAndPostIDService = async (query) => {
    const { postId } = query
    const participant = await Participant.findAll({ where: { lead: true, postId: postId } });
    return participant;
};
/* ---------- getall participant where postId ----------  */
const getAllParticipantByPostIdService = async (query) => {
    const { postId } = query
    const participant = await Participant.findAll({ where: { postId: postId } });
    return participant;
};
/* ---------- Count participant where postId ----------  */
const getCountParticipantByPostIdService = async (query) => {
    const { postId } = query
    const participant = await Participant.count({
        where: {
            postId: postId
        }
    });
    return participant;
};
/* ---------- get participant by userId----------  */
const getParticipantByUserIdService = async (query) => {
    const { userId, postId } = query
    const participant = await Participant.findAll({ where: { userID: userId, finish: false } });
    return participant;
};
/* ---------- get participant by id ----------  */
const getParticipantByIdService = async (query) => {
    const { userId } = query;
    const participant = await Participant.findOne({ where: { userId: userId } });
    return participant;
};
/* ---------- update finish ----------  */
const UpdateFinishByPostIdService = async (query, body) => {
    const { postId } = query
    const post = await Post.update({ status: 3 }, { where: { id: postId } });
    const participant = await Participant.update({ finish: true }, { where: { postId: postId } });
    return { post, participant, message: "Hoàn thành thiện nguyện thành công" }
}
module.exports = {
    addParticipantService,
    getAllParticipantByLeadService,
    getParticipantByIdService,
    getAllParticipantByPostIdService,
    getCountParticipantByPostIdService,
    getParticipantByUserIdService,
    getAllParticipantByLeadAndPostIDService,
    UpdateFinishByPostIdService
}