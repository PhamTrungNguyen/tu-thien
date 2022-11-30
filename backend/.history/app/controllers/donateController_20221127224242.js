const db = require('../models')
const bcrypt = require("bcrypt");
const donateService = require('../services/donateService')

/* ---------- Thêm donate ----------  */
const addDonate = async (req, res) => {
    let donate = await donateService.addDonateService(req.body)
    return res.send({ status: donate.status, message: donate.message })
}
/* ---------- Lấy ra donateId theo postId ----------  */
const GetDonateIDByPostID = async (req, res) => {
    let donate = await donateService.GetDonateIDByPostIDService(req.query)
    return res.send({ status: donate.status })
}

module.exports = {
    addDonate,
    GetDonateIDByPostID
}