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
const getCommentByCommentIDService = async (req, res) => {
    console.log(req.query);
    let donate = await commentService.getCommentByCommentIDService(req.query)
    return res.send(donate)
}
module.exports = {
    addComment,
    getCommentIDByPostID,
    getCommentByCommentIDService
}