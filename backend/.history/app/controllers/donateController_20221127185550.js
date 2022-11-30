const db = require('../models')
const bcrypt = require("bcrypt");
const postService = require('../services/postService')

const { QueryTypes } = require('sequelize');



const Account = db.accounts
const Post = db.posts


/* ---------- Thêm bài viết ----------  */
const addPost = async (req, res) => {
    let post = await postService.addPostService(req.body)
    return res.send({ status: post.status, message: post.message })
}

module.exports = {
    addPost,
    getAllPostHot,
    getLimitPost,
    getAllPostNoHot,
    getPostById,
    DeletePostById,
    postMoney

}