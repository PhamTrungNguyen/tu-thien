
const postController = require('../controllers/postController')


// router
const router = require('express').Router()


// use routers
router.post('/addPost', postController.addPost)
router.get('/getAllPost', postController.getAllPost)
router.get('/getLimitPost', postController.getLimitPost)
router.get('/getCountPost', postController.getCountPost)




module.exports = router