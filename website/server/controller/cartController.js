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
    seed: (req,res) => {
        sequelize.query(`
            drop table if exists items;
            drop table if exists orders;
            drop table if exists order_items;
            create table items(
                item_id serial primary key,
                item_name varchar(255),
                item_description varchar(255),
                item_price integer,
                item_img varchar(255)
            );
            create table orders(
                order_id serial primary key,
                total_cost integer,
                time_placed timestamp,
                order_by_name varchar(255),
                order_by_phonenumber integer
            );
            create table order_items(
                order_item_id serial primary key,
                item_id integer references items(item_id),
                item_price integer,
                item_quantity integer,
                order_id integer references orders(order_id)
            );
            insert into items(item_name,item_description,item_price,item_img)
            values ('Big Kulich','Big Kulich is very tasty',20,'...'),
            ('Small Kulich','Also very tasty but a little smaller',12,'...'),
            ('Pasha','The best of the best',28,'...'),
            ('Painted Egg','Very simple',1,'...'),
            ('Large Basket','Includes ...',80,'...'),
            ('Small Basket','Includes ...',55,'...');
        `).then(() => {
            console.log('DB seeded!')
            res.sendStatus(200)
        }).catch(err => console.log('error seeding DB', err))
    },
    //work in progress from here down, post for checkout on checkout.js
    checkoutClick: (req,res) => {
        sequelize.query(`
        `).then(() => {
            console.log('Checkout posted to order_items DB!')
            res.sendStatus(200)
        }).catch(err => console.log('Checkout fail', err))
    }
}