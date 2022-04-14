const express = require('express')
const cors = require("cors")
require('dotenv').config()
const app = express()
app.use(cors())
app.use(express.json())
const {SERVER_PORT} = process.env

const {
    getItems,
    getAllOrders
} = require("./controller/itemController")
const {
    seed,
    resetOrders,
    checkoutClick
} = require("./controller/cartController")

app.get("/api", (req,res) => res.send('Hello World!'))

app.get("/api/items", getItems)
app.get("/api/orders", getAllOrders)

app.post("/api/seed", seed)
app.post("/api/resetorders", resetOrders)

app.post("/api/cart", checkoutClick)

app.listen(SERVER_PORT, () => {console.log(`Server started on port ${SERVER_PORT}`)})