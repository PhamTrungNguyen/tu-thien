
const postController = require('../controllers/postController')


// router
const router = require('express').Router()


// use routers
router.post('/addPost', postController.addPost)
router.get('/getPost', postController.getAllPost)
router.get('/getLimitPostService', postController.getLimitPostService)




module.exports = router