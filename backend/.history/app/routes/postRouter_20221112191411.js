
const postController = require('../controllers/postController')


// router
const router = require('express').Router()


// use routers
router.post('/addPost', postController.addPost)
router.post('/getPost', postController.getAllPost)




module.exports = router