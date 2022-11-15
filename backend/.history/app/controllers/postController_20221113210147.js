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
/* ---------- lấy all bài viết hot ----------  */
const getAllPostHot = async (req, res) => {
    let post = await postService.getAllPostHotService(req.query)
    return res.status(200).send(post)
    // console.log(account)
}
/* ---------- lấy all bài viết no hot----------  */
const getAllPostNoHot = async (req, res) => {
    let post = await postService.getAllPostNoHotService(req.query)
    return res.status(200).send(post)
    // console.log(account)
}
/* ---------- phân trang bài viết ----------  */
const getLimitPost = async (req, res) => {

    let post = await postService.getLimitPostService(req.query)
    return res.status(200).send(post)
    // console.log(account)
}

module.exports = {
    addPost,
    getAllPostHot,
    getLimitPost,
    getAllPostNoHot

}