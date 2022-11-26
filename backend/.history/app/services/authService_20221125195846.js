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
/* ---------- get tài khoản by id----------  */
const getAccountByIdService = async (accountId) => {
    const account = await Account.findByPk(accountId);
    return account
}
/* ---------- Thêm tài khoản ----------  */
const getAccountByUserService = async (username) => {
    // const { username } = query
    console.log("🚀 ~ file: authService.js ~ line 34 ~ getAccountByUserService ~ username", username)
    const account = await Account.findOne({ where: { username: username } });
    return account
}
/* ---------- Cập nhập tài khoản ----------  */
const UpdateAccountByUserService = async (query, body) => {
    console.log("🚀 ~ file: authService.js ~ line 38 ~ UpdateAccountByUserService ~ body", body)
    const { idAccount } = query
    const account = await Account.update({
        displayName: body.displayName,
        email: body.email,
        totalMoney: body.money
    }, { where: { id: idAccount } });
    return account
}

module.exports = {
    addAccountService,
    getAccountByIdService,
    getAccountByUserService,
    UpdateAccountByUserService
}
