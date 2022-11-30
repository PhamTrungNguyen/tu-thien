const participantService = require('../services/participantService')

/* ---------- Thêm bài viết ----------  */
const addPost = async (req, res) => {
    let post = await participantService.(req.body)
    return res.send({ status: post.status, message: post.message })
}