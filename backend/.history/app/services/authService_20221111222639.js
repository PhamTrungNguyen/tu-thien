const bcrypt = require("bcrypt");

const Account = db.accounts
const Role = db.roles

// main work
/* ---------- Thêm tài khoản ----------  */
const addAccount = async (username, password, role_name) => {
    let info = {
        username: username,
        password: await bcrypt.hash(password, 10),
        role_name: role_name,
    }
    const isCheck = await Account.findOne({ where: { username: username } })
    if (isCheck) {
        return res.send({ status: 400, message: 'Tài khoản đã tồn tại !!!' })
    }
    else {
        await Account.create(info)
        return res.send({ status: 200, message: 'Tạo tài khoản thành công !!!' })
    }
}
