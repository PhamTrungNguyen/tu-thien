const db = require('../models')
const bcrypt = require("bcrypt");
const donateService = require('../services/donateService')

/* ---------- Thêm donate ----------  */
const addDonate = async (req, res) => {
    let post = await donateService.addDonateService(req.body)
    return res.send({ status: post.status, message: post.message })
}

module.exports = {
    addDonate,
}