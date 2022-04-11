let items = require('./itemdb.json')
module.exports = {
    getItems: (req,res) => {
        console.log("Items coming from back end")
        res.status(200).send(items)
    }
}