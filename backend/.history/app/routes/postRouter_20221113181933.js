
const postController = require('../controllers/postController')


// router
const router = require('express').Router()


// use routers
router.post('/addPost', postController.addPost)
router.get('/getPost', postController.getAllPost)
router.get('/getLimitPost', postController.getLimitPost)
router.get('/getCountPostService', postController.get)




module.exports = router