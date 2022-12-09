const commentService = require('../services/commentService')

/* ---------- Thêm donate ----------  */
const addComment = async (req, res) => {
    let comment = await commentService.addCommentService(req.body)
    return res.send({ status: comment.status, message: comment.message })
}
/* ---------- Lấy ra commentid theo postId ----------  */
const getCommentIDByPostID = async (req, res) => {
    console.log(req.query);
    let comment = await commentService.getCommentIDByPostIDService(req.query)
    return res.send(comment)
}
/* ---------- Lấy ra donate theo donateId ----------  */
const getCommentByCommentID = async (req, res) => {
    console.log(req.query);
    let comment = await commentService.getCommentByCommentIDService(req.query)
    return res.send(comment)
}
/* ---------- delete comment by id ----------  */
const deleteCommentById = async (req, res) => {
    let comment = await commentService.DeleteCommentByIdService(req.query)
    return res.status(comment.status).send(comment)
}
module.exports = {
    addComment,
    getCommentIDByPostID,
    getCommentByCommentID,
    deleteCommentById
}