const db = require('../models')
const bcrypt = require("bcrypt");
const postService = require('../services/postService')

const { QueryTypes } = require('sequelize');


// create main Model
const Account = db.accounts
const Post = db.posts

// main work
/* ---------- Thêm bài viết ----------  */
const addPost = async (req, res) => {
    let post = await postService.addPostService(req.body)
    return res.send({ status: post.status, message: post.message })
}
/* ---------- lấy all bài viết ----------  */
const getAllPost = async (req, res) => {

    const account = await db.sequelize.query("SELECT * FROM accounts", { type: QueryTypes.SELECT })
    return account;
    // return res.status(200).send(account)
    // console.log(account)
}
module.exports = {
    addPost,
}