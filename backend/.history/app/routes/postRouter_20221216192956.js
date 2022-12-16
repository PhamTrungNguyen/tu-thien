
const postController = require('../controllers/postController')


// router
const router = require('express').Router()


// use routers
router.post('/addPost', postController.addPost)
router.get('/getAllPostHot', postController.getAllPostHot)
router.get('/getLimitPost', postController.getLimitPost)
router.get('/getAllPostNoHot', postController.getAllPostNoHot)
router.get('/getAllPostRelate', postController.getAllPostRelate)
router.get('/getPostById', postController.getPostById)
router.get('/getCountPost', postController.getCountPost)
router.post('/postMoney', postController.postMoney)
router.delete('/DeletePostById', postController.DeletePostById)
router.put('/UpdatePostByPostId', postController.UpdatePostByPostId)




module.exports = router