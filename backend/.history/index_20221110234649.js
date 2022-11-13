const express = require('express')
const cors = require('cors')

// Khởi tạo express
const app = express()

// middleware
app.use(cors())
app.use(express.json())

app.use(express.urlencoded({ extended: true }))

// routers
const router = require('./app/routes/authRouter')
app.use('/api/auth', router)




//port
const PORT = process.env.PORT || 8080 // lấy đc tham số port
//Dinh nghia roter (đường dẫn)
//"/" : dispatches
app.get("/", function (req, res) {
    res.send("Trung nguyên")
})
//start web server lắng nghe port
app.listen(PORT, () => {
    console.log(`server is running on port ${PORT}`)
})