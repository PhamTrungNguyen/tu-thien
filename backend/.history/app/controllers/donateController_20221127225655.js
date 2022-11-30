const db = require('../models')
const bcrypt = require("bcrypt");
const donateService = require('../services/donateService')

/* ---------- Thêm donate ----------  */
const addDonate = async (req, res) => {
    let donate = await donateService.addDonateService(req.body)
    return res.send({ status: donate.status, message: donate.message })
}
/* ---------- Lấy ra donateId theo postId ----------  */
const getDonateIDByPostID = async (req, res) => {
    console.log(req.query);
    let donate = await donateService.getDonateIDByPostIDService(req.query)
    return donate
}

module.exports = {
    addDonate,
    getDonateIDByPostID
}