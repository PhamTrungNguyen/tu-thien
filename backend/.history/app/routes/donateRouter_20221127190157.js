
const donateController = require('../controllers/donateController')


// router
const router = require('express').Router()


// use routers
router.post('/addPost', donateController.addDonate)




module.exports = router