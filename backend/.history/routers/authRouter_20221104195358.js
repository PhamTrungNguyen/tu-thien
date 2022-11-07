
const authController = require('../controllers/authController.js')


// router
const router = require('express').Router()


// use routers
router.post('/addAccount', authController.addAccount)



module.exports = router