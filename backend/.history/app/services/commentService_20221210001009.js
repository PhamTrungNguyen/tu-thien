
const db = require("../models");
const Comment = db.comments;
const Post = db.posts;
const PostComment = db.PostComments;
/* ---------- Thêm comment ----------  */
const addCommentService = async (body) => {
    const comment = await Comment.create({
        userID: body.userId,
        text: body.text || body.review,
        hot: body.hot || false
    });
    await PostComment.create({
        postId: body.postId,
        commentId: comment.id
    })
    return { status: 200, message: "Bình luận thành công" };
};

/* ---------- Lấy ra comment theo postId ----------  */
const getCommentIDByPostIDService = async (query) => {
    const { postId } = query
    const postComment = await PostComment.findAll({ where: { postId: postId } });
    return postComment;
};
/* ---------- Lấy ra comment theo commentId ----------  */
const getCommentByCommentIDService = async (query) => {
    const { commentId } = query
    const postComment = await Comment.findAll({ where: { id: commentId, hot: 0 } });
    return postComment;
};
/* ---------- Lấy ra comment theo commentId và hot ----------  */
const getCommentByCommentIDAndHotService = async (query) => {
    const { commentId } = query
    const postComment = await Comment.findAll({ where: { id: commentId, hot: true } });
    return postComment;
};
/* ---------- Xóa  comment by id ----------  */
const DeleteCommentByIdService = async (query) => {
    const { id } = query;
    const comment = await Comment.destroy({ where: { id: +id } })
    if (comment === 1) {
        return { status: 200, message: "yes" }
    }
    return { status: 400, message: "no" }
};
/* ---------- Xóa  bài viết by id ----------  */
const DeletePostByIdService = async (query) => {
    const { idPost } = query;
    console.log("🚀 ~ file: postService.js ~ line 35 ~ getPostByIdService ~ idPost", idPost)

    const post = await Post.destroy({ where: { id: +idPost } })

};
module.exports = {
    addCommentService,
    getCommentIDByPostIDService,
    getCommentByCommentIDService,
    DeleteCommentByIdService,
    getCommentByCommentIDAndHotService
}