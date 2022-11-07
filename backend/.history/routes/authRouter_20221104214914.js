
const authController = require('../controllers/authController.js')


// router
const router = require('express').Router()


// use routers
router.post('/addAccount', authController.addAccount)
router.get('/getAllAccount', authController.getAllAccount)
router.delete('/deleteAccount/:id', authController.deleteAccount)



module.exports = router