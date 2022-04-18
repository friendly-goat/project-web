const express = require('express')
const cors = require("cors")
//const session = require('express-session')
require('dotenv').config()
const app = express()
app.use(cors()) //origin: 'http://localhost:3000' //what i used when I tried to do cookie-parser
app.use(express.json())
//app.use(session())

const {SERVER_PORT} = process.env

const {
    contact
} = require("./controller/emailController")
const {
    seedUsers,
    newUser,
    login
} = require("./controller/userController")
const {
    getItems,
    getAllOrders
} = require("./controller/itemController")
const {
    seed,
    resetOrders,
    checkoutClick
} = require("./controller/cartController")

// app.get("/api", (req,res) => res.send('Hello World!'))

app.post("/api/contact", contact)

app.get("/api/items", getItems)
app.get("/api/orders", getAllOrders)
app.post("/api/login", login)

app.post("/api/seed", seed)
app.post("/api/resetorders", resetOrders)
app.post("/api/seedusers", seedUsers)
app.post("/api/newuser", newUser)

app.post("/api/cart", checkoutClick)

app.listen(SERVER_PORT, () => {console.log(`Server started on port ${SERVER_PORT}`)})