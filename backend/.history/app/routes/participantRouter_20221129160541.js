const participantController = require('../controllers/participantController')
// router
const router = require('express').Router()


// use routers
router.post('/addParticipant', participantController.addParticipant)





module.exports = router