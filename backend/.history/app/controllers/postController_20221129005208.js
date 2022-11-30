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
}
/* ---------- lấy all bài viết no hot----------  */
const getAllPostNoHot = async (req, res) => {
    let post = await postService.getAllPostNoHotService(req.query)
    return res.status(200).send(post)
}
/* ---------- lấy all bài viết relate----------  */
const getAllPostRelate = async (req, res) => {
    let post = await postService.getAllPostRelateService(req.query)
    return res.status(200).send(post)
}
/* ---------- lấy  bài viết by id----------  */
const getPostById = async (req, res) => {
    let post = await postService.getPostByIdService(req.query)
    return res.status(200).send(post)
}
/* ---------- delete viết by id----------  */
const DeletePostById = async (req, res) => {
    let post = await postService.DeletePostByIdService(req.query)
    return res.status(post.status).send(post)
}
/* ---------- phân trang bài viết ----------  */
const getLimitPost = async (req, res) => {

    let post = await postService.getLimitPostService(req.query)
    return res.status(200).send(post)
}
/* ----------  ----------  */
const postMoney = async (req, res) => {
    let post = await postService.postMoneyService(req.query)
    return res.status(200).send(post)
}

module.exports = {
    addPost,
    getAllPostHot,
    getLimitPost,
    getAllPostNoHot,
    getPostById,
    DeletePostById,
    postMoney,
    getAllPostRelate

}