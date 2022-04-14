require('dotenv').config()
const {CONNECTION_STRING} = process.env
const Sequelize = require('sequelize')
const sequelize = new Sequelize(CONNECTION_STRING, {
    dialect: 'postgres',
    dialectOptions: {
        ssl: {
            rejectUnauthorized: false
        }
    }
})

module.exports = {
    getItems: (req,res) => {
        sequelize.query(`
        select * from items
        `)
        .then(itemsDB => {
            console.log('items are coming from DB')
            res.status(200).send(itemsDB)
        })
        .catch(err => console.log('error getting items DB', err))
    },
    getAllOrders: (req,res) => {
        sequelize.query(`
        select * from orders
        `)
        .then(itemsDB => {
            console.log('items are coming from orders DB')
            res.status(200).send(itemsDB)
        })
        .catch(err => console.log('error getting items from orders DB', err))
    }
}