const Account = db.accounts
const Role = db.roles

// main work
/* ---------- Thêm tài khoản ----------  */
const addAccount = async (req, res) => {
    let info = {
        username: req.body.username,
        password: await bcrypt.hash(req.body.password, 10),
        role_name: req.body.role_name,
    }
    const isCheck = await Account.findOne({ where: { username: req.body.username } })
    if (isCheck) {
        return res.send({ status: 400, message: 'Tài khoản đã tồn tại !!!' })
    }
    else {
        await Account.create(info)
        return res.send({ status: 200, message: 'Tạo tài khoản thành công !!!' })
    }
}