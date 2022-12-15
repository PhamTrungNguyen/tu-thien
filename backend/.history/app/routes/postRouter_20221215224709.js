
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
router.post('/postMoney', postController.postMoney)
router.delete('/DeletePostById', postController.DeletePostById)
router.delete('/DeletePostById', postController.DeletePostById)




module.exports = router