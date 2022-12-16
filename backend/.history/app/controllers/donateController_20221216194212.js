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
    return res.send(donate)
}
/* ---------- Lấy ra donate theo donateId ----------  */
const getDonateByDonateID = async (req, res) => {
    console.log(req.query);
    let donate = await donateService.getDonateByDonateIDService(req.query)
    return res.send(donate)
}
/* ---------- Sum donate  ----------  */
const getSumDonate = async (req, res) => {
    let donate = await donateService.getSumDonateService()
    return res.send({ donate })
}

module.exports = {
    addDonate,
    getDonateIDByPostID,
    getDonateByDonateID,
    getSumDonate
}