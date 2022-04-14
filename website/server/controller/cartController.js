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
                order_by_name varchar(255),
                order_by_phonenumber varchar(15)
            );
            create table order_items(
                order_item_id serial primary key,
                item_id integer references items(item_id),
                item_name varchar(255),
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
    resetOrders: (req,res) => {
        sequelize.query(`
            drop table if exists orders cascade;
            drop table if exists order_items cascade;
            create table orders(
                order_id serial primary key,
                total_cost integer,
                order_by_name varchar(255),
                order_by_phonenumber varchar(15)
            );
            create table order_items(
                order_item_id serial primary key,
                item_id integer references items(item_id),
                item_name varchar(255),
                item_price integer,
                item_quantity integer,
                order_id integer references orders(order_id)
            );
        `).then(() => {
            console.log('Orders re-set')
            res.sendStatus(200)
        }).catch(err => console.log('error re-setting orders', err))
    },
    //work in progress from here down, post for checkout on checkout.js
    checkoutClick: (req,res) => {
        console.log(req.body)
        // const { orderArr } = req.body // i am bad at de-struc
        let total = 0
        for(let i = 0; i < req.body.length; i++){
            total = total + (req.body[i].item_price * req.body[i].quantity)
        }
        console.log(total)
        sequelize.query(`
            insert into orders(total_cost,order_by_name,order_by_phonenumber)
            values (${total},'Alex',3033466618);
        `).then(() => {
            console.log('Order added to database')
            res.sendStatus(200)
        }).catch(err => console.log('error adding to DB', err))
        for(let i = 0; i < req.body.length; i++){
            sequelize.query(`
                insert into order_items(item_id,item_name,item_price,item_quantity,order_id)
                values(${req.body[i].item_id},'${req.body[i].item_name}',${req.body[i].item_price},${req.body[i].quantity},(select max(order_id) from orders));
            `).then(() => {
                console.log('Order_items added to database')
            }).catch(err => console.log('error adding to order_items DB', err))
        }
    }
}