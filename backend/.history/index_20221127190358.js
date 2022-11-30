const express = require('express')
const cors = require('cors')

// Khởi tạo express
const app = express()

// Cho phép chia sẽ tài nguyên
app.use(cors())
// parse requests of content-type - application/json
app.use(express.json({ limit: '50mb' }));
// parse requests of content-type - application/x-www-form-urlencoded
app.use(express.urlencoded({ extended: true, limit: '50mb' }))

// routers
const routerAuth = require('./app/routes/authRouter')
const routerPost = require('./app/routes/postRouter')
const routerPost = require('./app/routes/donateRouter')
app.use('/api/auth', routerAuth)
app.use('/api/post', routerPost)




// set port, listen for requests
const PORT = process.env.PORT || 8080 // lấy đc tham số port trong file .env
app.get("/", function (req, res) {
    res.send("Trung nguyên")
})
//start web server lắng nghe port
app.listen(PORT, () => {
    console.log(`server is running on port ${PORT}`)
})