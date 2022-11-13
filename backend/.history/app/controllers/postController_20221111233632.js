const db = require('../models')
const bcrypt = require("bcrypt");
const postService = require('../services/postService')

const { QueryTypes } = require('sequelize');


// create main Model
const Account = db.accounts
const Post = db.posts

// main work
/* ---------- Thêm tài khoản ----------  */
const addPost = async (req, res) => {
    let post = await postService.addPostService(req.body)
    return res.send({ status: account.status, message: account.message })
}

module.exports = {
    addPost,
}