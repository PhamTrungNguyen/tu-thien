
const authController = require('../controllers/authController.js')


// router
const router = require('express').Router()


// use routers
router.post('/addAccount', authController.addAccount)
router.post('/getAllAccount', authController.getAllAccount)



module.exports = router