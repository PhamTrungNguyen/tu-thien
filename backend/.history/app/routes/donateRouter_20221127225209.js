
const donateController = require('../controllers/donateController')


// router
const router = require('express').Router()


// use routers
router.post('/addDonate', donateController.addDonate)
router.get('/getDonateIDByPostID', donateController.getDonateIDByPostID)




module.exports = router