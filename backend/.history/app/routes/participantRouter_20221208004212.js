const participantController = require('../controllers/participantController')
// router
const router = require('express').Router()


// use routers
router.post('/addParticipant', participantController.addParticipant)
router.get('/getAllParticipantByLead', participantController.getAllParticipantByLead)
router.get('/getParticipantById', participantController.getParticipantById)
router.get('/getAllParticipantByPostId', participantController.getAllParticipantByPostId)
router.get('/getCountParticipantByPostId', participantController.getCountParticipantByPostId)
router.get('/getParticipantByUserId', participantController.getParticipantByUserId)
router.get('/getAllParticipantByLeadAndPostID', participantController.getAllParticipantByLeadAndPostID)





module.exports = router