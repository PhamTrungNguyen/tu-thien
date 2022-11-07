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
    }

    const product = await Product.create(info)
    res.status(200).send(product)
    console.log(product)

}
module.exports = {
    addProduct,
    getAllProducts,
    getOneProduct,
    updateProduct,
    deleteProduct,
    getPublishedProduct,
    getProductReviews,
    upload

}