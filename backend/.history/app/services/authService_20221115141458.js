const bcrypt = require("bcrypt");
const db = require('../models')

const Account = db.accounts
const Role = db.roles

// main work
/* ---------- Thêm tài khoản ----------  */
const addAccountService = async (body) => {
    let info = {
        username: body.username,
        password: await bcrypt.hash(body.password, 10),
        roleId: body.role_name,
    }
    const isCheck = await Account.findOne({ where: { username: body.username } })
    if (isCheck) {
        return { status: 400, message: 'Tài khoản đã tồn tại !!!' }
    }
    else {
        await Account.create(info)
        return { status: 200, message: 'Tạo tài khoản thành công !!!' }
    }
}
/* ---------- get  tài khoản by id----------  */

const getAccountByIdService = async (accountId) => {
    const account = await Account.findByPk(accountId);
    return account
}
/* ---------- Thêm tài khoản ----------  */

const getAccountByUserService = async (query) => {
    const { username } = query
    console.log("🚀 ~ file: authService.js ~ line 34 ~ getAccountByUserService ~ username", username)
    let account = await Account.findOne({ where: { username: username } });
    return account
}

module.exports = {
    addAccountService,
    getAccountByIdService,
    getAccountByUserService
}
