const participantController = require('../controllers/participantController')
// router
const router = require('express').Router()


// use routers
router.post('/addParticipant', participantController.addParticipant)
router.post('/getAllParticipantByLead', participantController.getAllParticipantByLead)





module.exports = router