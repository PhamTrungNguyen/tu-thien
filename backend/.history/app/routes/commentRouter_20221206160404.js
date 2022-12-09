
const commentController = require('../controllers/commentController')


// router
const router = require('express').Router()


// use routers
router.post('/addComment', commentController.addComment)
router.get('/getCommentIDByPostID', commentController.getCommentIDByPostID)
router.get('/getCommentByCommentID', commentController.getCommentByCommentID)
router.get('/getCommentByCommentIDAndHot', commentController.getCommentByCommentIDAndHot)
router.delete('/deleteCommentById', commentController.deleteCommentById)





module.exports = router