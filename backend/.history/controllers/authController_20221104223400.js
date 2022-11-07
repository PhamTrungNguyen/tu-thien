const db = require('../models')
const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");
const { QueryTypes } = require('sequelize');
// // image Upload
// const multer = require('multer')
// const path = require('path')


// create main Model
const Account = db.accounts
const Role = db.roles

// main work

// 1. create product

const addAccount = async (req, res) => {
    let info = {
        username: req.body.username,
        password: await bcrypt.hash(req.body.password, 10),
        role_name: req.body.role_name,
    }
    const isCheck = await Account.findOne({ where: { username } })
    if (isCheck) {
        return res.json({ status: 400, message: 'Tài khoản đã tồn tại !!!' })
    }
    else {
        const account = await Account.create(info)
        return res.status(200).send(account)
    }
}
const getAllAccount = async (req, res) => {

    const account = await db.sequelize.query("SELECT * FROM accounts", { type: QueryTypes.SELECT })
    res.status(200).send(account)
    console.log(account)
}
const deleteAccount = async (req, res) => {

    let id = req.params.id

    await Account.destroy({ where: { id: id } })

    res.status(200).send('Account is deleted !')

}
const login = async (req, res) => {
    try {
        const { signUpName, signUpPass } = req.body;
        const account = await Account.findOne({ where: { username: signUpName } });
        if (account) {
            const isCheck = await bcrypt.compare(signUpPass, account.password);
            if (isCheck) {

                return res.json({ status: 200, message: 'Login successfully!' })
            }
            else {

                return res.json({ status: 400, message: 'Error password' })
            }
        } else {
            return res.json({ status: 400, message: 'Account not fund !' })
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