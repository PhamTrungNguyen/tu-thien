const commentService = require('../services/commentService')

/* ---------- Thêm donate ----------  */
const addComment = async (req, res) => {
    let comment = await commentService.addCommentService(req.body)
    return res.send({ status: comment.status, message: comment.message })
}
module.exports = {
    addComment
}