
const postController = require('../controllers/postController')


// router
const router = require('express').Router()


// use routers
router.post('/addPosst', postController.addPost)




module.exports = router