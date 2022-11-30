const participantService = require('../services/participantService')

/* ---------- Thêm bài viết ----------  */
const addParticipant = async (req, res) => {
    let participant = await participantService.addParticipantService(req.body)
    return res.send({ status: participant.status, message: participant.message, message_number: participant.message_number })
}
/* ---------- Thêm bài viết ----------  */
const getAllParticipantByLead = async (req, res) => {
    let participant = await participantService.getAllParticipantByLead()
    return res.send(participant)
}
module.exports = {
    addParticipant,
}