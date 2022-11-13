
const postController = require('../controllers/postController')


// router
const router = require('express').Router()


// use routers
router.post('/addAccount', postController.addAccount)




module.exports = router