
const commentController = require('../controllers/commentController')


// router
const router = require('express').Router()


// use routers
router.post('/addComment', commentController.addComment)
router.get('/getCommentIDByPostID', commentController.getCommentIDByPostID)





module.exports = router