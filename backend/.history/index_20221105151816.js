const express = require('express')
const cors = require('cors')


const app = express()

// middleware
app.use(cors())
app.use(express.json())

app.use(express.urlencoded({ extended: true }))
app.get("/", function (req, res) {
    res.send("Trung nguyên")
})

// routers
const router = require('./routes/authRouter')
app.use('/api/auth', router)

//static Images Folder

// app.use('/Images', express.static('./Images'))


//port

const PORT = process.env.PORT || 8080

//create server

app.listen(PORT, () => {
    console.log(`server is running on port ${PORT}`)
})