const participantService = require('../services/participantService')

/* ---------- Thêm participant ----------  */
const addParticipant = async (req, res) => {
    let participant = await participantService.addParticipantService(req.body)
    return res.send({ status: participant.status, message: participant.message, message_number: participant.message_number })
}
/* ---------- getall participant where lead=1 ----------  */
const getAllParticipantByLead = async (req, res) => {
    let participant = await participantService.getAllParticipantByLeadService()
    return res.send(participant)
}
/* ---------- get participant by id ----------  */
const getParticipantById = async (req, res) => {

    let participant = await participantService.getParticipantByIdService(req.query)
    return res.send(participant)
}
/* ---------- get participant by postid ----------  */

const getAllParticipantByPostId = async (req, res) => {
    let participant = await participantService.getAllParticipantByPostIdService(req.query)
    return res.send(participant)
}
/* ---------- get participant by userID ----------  */

const getParticipantByUserId = async (req, res) => {
    let participant = await participantService.getParticipantByUserIdService(req.query)
    return res.send(participant)
}
/* ---------- count participant by postid ----------  */
const getCountParticipantByPostId = async (req, res) => {
    let participant = await participantService.getCountParticipantByPostIdService(req.query)
    return res.send({ participant })
}
module.exports = {
    addParticipant,
    getAllParticipantByLead,
    getParticipantById,
    getAllParticipantByPostId,
    getCountParticipantByPostId,
    getParticipantByUserId
}