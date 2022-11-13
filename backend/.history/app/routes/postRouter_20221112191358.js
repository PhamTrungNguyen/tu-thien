
const postController = require('../controllers/postController')


// router
const router = require('express').Router()


// use routers
router.post('/addPost', postController.addPost)
router.post('/addPost', postController.get)




module.exports = router