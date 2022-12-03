
const db = require("../models");
const Comment = db.comments;
const Post = db.posts;
const PostComment = db.PostComments;
/* ---------- Thêm donate ----------  */
const addCommentService = async (body) => {
    const post = await Post.findByPk(body.postID);
    console.log("🚀 ~ file: donateService.js ~ line 9 ~ addDonateService ~ post", post)
    const comment = await Comment.create({
        userID: body.userID,
        text: body.text
    });
    await PostDonate.create({
        postId: body.postID,
        commentId: comment.id
    })
    return { status: 200, message: "Đóng góp thành công" };
};