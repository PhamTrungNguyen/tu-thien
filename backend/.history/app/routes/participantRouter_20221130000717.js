const participantController = require('../controllers/participantController')
// router
const router = require('express').Router()


// use routers
router.post('/addParticipant', participantController.addParticipant)
router.get('/getAllParticipantByLead', participantController.getAllParticipantByLead)
router.get('/getParticipantById', participantController.getParticipantById)





module.exports = router