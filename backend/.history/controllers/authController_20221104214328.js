const db = require('../models')
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
        password: req.body.password,
        role_name: req.body.role_name,
    }

    const account = await Account.create(info)
    res.status(200).send(account)
    console.log(account)
}
const getAllAccount = async (req, res) => {

    const account = await db.sequelize.query("SELECT * FROM accounts", { type: QueryTypes.SELECT })
    res.status(200).send(account)
    console.log(account)
}
const deleteAccount = async (req, res) => {

    let id = req.params.id

    await Product.destroy({ where: { id: id } })

    res.status(200).send('Product is deleted !')

}
module.exports = {
    addAccount,
    getAllAccount
}