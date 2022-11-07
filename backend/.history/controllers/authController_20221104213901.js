const db = require('../models')

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
        password: req.body.password,
        role_name: req.body.role_name,
    }

    const account = await Account.create(info)
    res.status(200).send(account)
    console.log(account)
}
const getAllAccount = async (req, res) => {

    const account = db.sequelize.query("SELECT * FROM accounts")
    res.status(200).send(account)
    console.log(account)
}
module.exports = {
    addAccount,
    getAllAccount
}