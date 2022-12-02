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
/* ---------- ge participant by id ----------  */
const getParticipantById = async (req, res) => {

    let participant = await participantService.getParticipantByIdService(req.query)
    return res.send(participant)
}
const getAllParticipantByPostId = async (req, res) => {
    let participant = await participantService.getAllParticipantByPostIdService(req.query)
    return res.send(participant)
}
module.exports = {
    addParticipant,
    getAllParticipantByLead,
    getParticipantById,
    getAllParticipantByPostId
}