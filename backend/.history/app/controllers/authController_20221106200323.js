const db = require('../models')
const bcrypt = require("bcrypt");
// const jwt = require("jsonwebtoken");
const { QueryTypes } = require('sequelize');


// create main Model
const Account = db.accounts
const Role = db.roles

// main work
const addAccount = async (req, res) => {
    let info = {
        username: req.body.username,
        password: await bcrypt.hash(req.body.password, 10),
        role_name: req.body.role_name,
    }
    const isCheck = await Account.findOne({ where: { username: req.body.username } })
    if (isCheck) {
        return res.json({ status: 400, message: 'Tài khoản đã tồn tại !!!' })
    }
    else {
        await Account.create(info)
        return res.json({ status: 200, message: 'Tạo tài khoản thành công !!!' })
    }
}
const getAllAccount = async (req, res) => {

    const account = await db.sequelize.query("SELECT * FROM accounts", { type: QueryTypes.SELECT })
    res.status(200).send(account)
    // console.log(account)
}
const deleteAccount = async (req, res) => {

    let id = req.params.id

    await Account.destroy({ where: { id: id } })

    res.status(200).send('Xóa tài khoản thành công')

}
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

                return res.json({ status: 400, message: 'Mật khẩu không chính xác' })
            }
        } else {
            return res.json({ status: 400, message: 'Tài khoản không tồn tại' })
        }
    }
    catch (err) {

    }
}
module.exports = {
    addAccount,
    getAllAccount,
    deleteAccount,
    login,
}