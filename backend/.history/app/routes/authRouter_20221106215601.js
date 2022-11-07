
const authController = require('../controllers/authController.js')


// router
const router = require('express').Router()


// use routers
router.post('/addAccount', authController.addAccount)
router.get('/getAllAccount', authController.getAllAccount)
router.delete('/deleteAccount/:id', authController.deleteAccount)
router.post('/login', authController.login)
router.post('/getAccountByUser', authController.getAccountByUser)



module.exports = router