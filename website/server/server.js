const express = require('express')
const cors = require("cors")
require('dotenv').config()
const app = express()
app.use(cors())
app.use(express.json())
const {SERVER_PORT} = process.env

const {
    getItems
} = require("./controller/itemController")
const {
    seed
} = require("./controller/cartController")

app.get("/api", (req,res) => res.send('Hello World!'))

app.get("/api/items", getItems)

app.post("/api/seed", seed)

app.listen(SERVER_PORT, () => {console.log(`Server started on port ${SERVER_PORT}`)})