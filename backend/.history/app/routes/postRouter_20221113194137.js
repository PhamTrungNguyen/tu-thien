
const postController = require('../controllers/postController')


// router
const router = require('express').Router()


// use routers
router.post('/addPost', postController.addPost)
router.get('/getAllPostHot', postController.getAllPostHot)
router.get('/getLimitPost', postController.getLimitPost)




module.exports = router