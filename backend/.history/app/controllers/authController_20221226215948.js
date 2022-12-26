const db = require('../models')
const bcrypt = require("bcrypt");
const authService = require('../services/authService')

const { QueryTypes } = require('sequelize');


// create main Model
const Account = db.accounts
const Role = db.roles

// main work
/* ---------- Thêm tài khoản ----------  */
const addAccount = async (req, res) => {
    let account = await authService.addAccountService(req.body)
    return res.send({ status: account.status, message: account.message })
}
/* ---------- lấy tài khoản theo ID ----------  */
const getAccountByID = async (req, res) => {
    const { accountId } = req.query
    const account = await authService.getAccountByIdService(accountId)
    return res.status(200).send(account)
}
/* ---------- lấy all tài khoản ----------  */
const getAllAccount = async (req, res) => {
    const account = await db.sequelize.query("SELECT * FROM accounts", { type: QueryTypes.SELECT })
    res.status(200).send(account)
    // console.log(account)
}
/* ---------- lấy tài khoản theo user ----------  */
// const getAccountByUser = async (req, res) => {
//     const { username } = req.query
//     console.log("🚀 ~ file: authController.js ~ line 34 ~ getAccountByUser ~ username", username)
//     const account = await Account.findOne({ where: { username: username } });
//     res.status(200).send(account)
// }
const getAccountByUser = async (req, res) => {
    const { username } = req.query
    let account = await authService.getAccountByUserService(username)
    return res.status(200).send({ account })


}

// /* ---------- Xóa tài khoản ----------  */
// const deleteAccount = async (req, res) => {
//     let id = req.params.id
//     await Account.destroy({ where: { id: id } })
//     res.status(200).send('Xóa tài khoản thành công')

// }
/* ---------- Update tài khoản ----------  */
const UpdateAccountByUser = async (req, res) => {
    let account = await authService.UpdateAccountByUserService(req.query, req.body)
    return res.status(200).send(account)

}
/* ---------- Update tài khoản ----------  */
const UpdateMoneyByUser = async (req, res) => {
    let account = await authService.UpdateMoneyByUserService(req.query, req.body)
    return res.status(200).send(account)

}
/* ---------- Update tài khoản ----------  */
const ResetPassword = async (req, res) => {
    let account = await authService.ResetPasswordService(req.query)
    return res.send(account)

}
/* ---------- Update tài khoản ----------  */
const UpdatePassword = async (req, res) => {
    let account = await authService.UpdatePasswordService(req.query, req.body)
    return res.send({ message })

}
/* ---------- Đăng nhập  ----------  */
const login = async (req, res) => {
    try {
        const { signUpName, signUpPass } = req.body;
        const account = await Account.findOne({ where: { username: signUpName } });
        if (account) {
            const isCheck = await bcrypt.compare(signUpPass, account.password);
            if (isCheck) {

                return res.send({ status: 200, message: 'Đăng nhập thành công' })
            }
            else {

                return res.send({ status: 400, message: 'Mật khẩu không chính xác' })
            }
        } else {
            return res.send({ status: 400, message: 'Tài khoản không tồn tại' })
        }
    }
    catch (err) {

    }
}
module.exports = {
    addAccount,
    getAllAccount,
    // deleteAccount,
    login,
    getAccountByUser,
    getAccountByID,
    UpdateAccountByUser,
    UpdateMoneyByUser,
    ResetPassword,
    UpdatePassword
}