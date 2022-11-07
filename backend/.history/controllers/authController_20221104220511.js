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

    await Account.destroy({ where: { id: id } })

    res.status(200).send('Account is deleted !')

}
module.exports = {
    addAccount,
    getAllAccount,
    deleteAccount
}