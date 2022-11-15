
const postController = require('../controllers/postController')


// router
const router = require('express').Router()


// use routers
router.post('/addPost', postController.addPost)
router.get('/getPost', postController.getAllPost)
router.get('/getLimitPostService', postController.getLimitPostService)
router.get('/getCountPostService', postController.getCountPostService)




module.exports = router