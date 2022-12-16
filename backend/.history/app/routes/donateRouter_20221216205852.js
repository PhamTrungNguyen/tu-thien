
const donateController = require('../controllers/donateController')


// router
const router = require('express').Router()


// use routers
router.post('/addDonate', donateController.addDonate)
router.get('/getDonateIDByPostID', donateController.getDonateIDByPostID)
router.get('/getDonateByDonateID', donateController.getDonateByDonateID)
router.get('/getSumDonate', donateController.getSumDonate)
router.get('/getSumDonateByUserId', donateController.getSumDonateByUserId)




module.exports = router