const donateService = require('../services/')

/* ---------- Thêm donate ----------  */
const addDonate = async (req, res) => {
    let donate = await donateService.addDonateService(req.body)
    return res.send({ status: donate.status, message: donate.message })
}