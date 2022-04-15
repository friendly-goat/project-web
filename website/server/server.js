const express = require('express')
const cookieParser = require('cookie-parser')
const cors = require("cors")
require('dotenv').config()
const app = express()
app.use(cors({origin: 'http://localhost:3000', credentials: true}))
app.use(express.json())
app.use(cookieParser())
const {SERVER_PORT} = process.env

const {
    seedUsers,
    newUser,
    login,
    setCookie
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

app.get("/", setCookie)
app.get("/api/items", getItems)
app.get("/api/orders", getAllOrders)
app.post("/api/login", login)

app.post("/api/seed", seed)
app.post("/api/resetorders", resetOrders)
app.post("/api/seedusers", seedUsers)
app.post("/api/newuser", newUser)

app.post("/api/cart", checkoutClick)

app.listen(SERVER_PORT, () => {console.log(`Server started on port ${SERVER_PORT}`)})