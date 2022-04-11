const express = require('express')
const cors = require("cors")
const app = express()
app.use(cors())
app.use(express.json())
const port = 5000;

const {
    getItems
} = require("./controller/itemController")

app.get("/api", (req,res) => res.send('Hello World!'))

app.get("/api/items", getItems)

app.listen(port, () => {console.log(`Server started on port ${port}`)})