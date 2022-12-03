
const db = require("../models");
const Comment = db.comments;
const Post = db.posts;
const PostComment = db.PostComments;
/* ---------- Thêm donate ----------  */
const addCommentService = async (body) => {
    const post = await Post.findByPk(body.postId);
    console.log("🚀 ~ file: donateService.js ~ line 9 ~ addDonateService ~ post", post)
    const comment = await Comment.create({
        userID: body.userId,
        text: body.text
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

module.exports = {
    addCommentService,
}