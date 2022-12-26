const bcrypt = require("bcrypt");
const db = require('../models')

const Account = db.accounts


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
/* ---------- Thêm tài khoản ----------  */
const ResetPasswordService = async (query) => {
    const { username } = query
    const password = '12345678';
    const saltRounds = 10;
    const newPassword = await bcrypt.hash(password, saltRounds)
    const account = await Account.update({ password: newPassword }, { where: { username: username } });
    return { account, status: 400, message: 'Thành công' }
}
/* ---------- get tài khoản by id----------  */
const getAccountByIdService = async (accountId) => {
    const account = await Account.findByPk(accountId);
    return account
}
/* ---------- get all tài khoản ----------  */
const getAllAccountService = async (accountId) => {
    const account = await Account.findAll();
    return account
}
/* ---------- Thêm tài khoản ----------  */
const getAccountByUserService = async (username) => {
    // const { username } = query
    const account = await Account.findOne({ where: { username: username } });
    return account
}
/* ---------- Cập nhập tài khoản ----------  */
const UpdateAccountByUserService = async (query, body) => {
    const { idAccount } = query
    // const moneyUser = oleAccount.
    let values = {
        displayName: body.displayName,
        email: body.email,
        code: body.code,
        totalMoney: (parseInt(body.totalMoney)).toString()
    }
    const account = await Account.update(values, { where: { id: idAccount } });
    return { account, message: "Cập nhập thành công" }
}
/* ---------- Cập nhập tiền sau khi đóng góp ----------  */
const UpdateMoneyByUserService = async (query, body) => {
    const { idAccount } = query
    let values = {
        totalMoney: (parseInt(body.money)).toString()
    }
    const account = await Account.update(values, { where: { id: idAccount } });
    return { account, message: "Đóng góp thành công" }
}
const UpdatePasswordService = async (query, body) => {
    try {
        const { OldPassword, NewPassword } = body;
        const { username } = query
        const account = await Account.findOne({ where: { username: username } });
        if (account) {
            const isCheck = await bcrypt.compare(OldPassword, account.password);
            const newPass = await bcrypt.hash(NewPassword, 10)

            console.log("🚀 ~ file: authService.js:78 ~ UpdatePasswordService ~ isCheck", isCheck)
            if (isCheck) {
                await Account.update({ password: newPass }, { where: { username: username } });
                return { status: 200, message: '1' }
            }
            else {

                return { status: 400, message: '0' }
            }
        } else {
            return { status: 400, message: '0' }
        }

    }
    catch (err) {
        return err
    }
}

module.exports = {
    addAccountService,
    getAccountByIdService,
    getAccountByUserService,
    UpdateAccountByUserService,
    UpdateMoneyByUserService,
    getAllAccountService,
    ResetPasswordService,
    UpdatePasswordService
}
