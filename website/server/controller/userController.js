require("dotenv").config();
var bcrypt = require('bcryptjs');
const { CONNECTION_STRING } = process.env;
const Sequelize = require("sequelize");
const sequelize = new Sequelize(CONNECTION_STRING, {
  dialect: "postgres",
  dialectOptions: {
    ssl: {
      rejectUnauthorized: false,
    },
  },
});

module.exports = {
  seedUsers: (req, res) => {
    sequelize
      .query(`
        drop table if exists users;
        create table users(
            user_id serial primary key,
            user_firstname varchar(255),
            user_lastname varchar(255),
            user_username varchar(255),
            user_phonenumber varchar(255),
            user_email varchar(255),
            user_password varchar(255)
        );
        `)
      .then(() => {
        console.log("User DB seeded");
        res.sendStatus(200);
      })
      .catch((err) => console.log("error seeding user DB", err));
  },
  newUser: (req, res) => {
    const { firstname, lastname, username, phoneNumber, email, password } = req.body[0]
    const salt = bcrypt.genSaltSync(5)
    const hash = bcrypt.hashSync(password, salt)
    sequelize.query(`
    insert into users(user_firstname,user_lastname,user_username,user_phonenumber,user_email,user_password)
    values('${firstname}','${lastname}','${username}','${phoneNumber}','${email}','${hash}');
    `).then(() => {
        console.log('New user added')
        res.sendStatus(200)
    }).catch(err => console.log('User could not be added', err))
  },
  login: (req,res) => {
    //console.log(req.body)
    let pass = false
    const { username, password } = req.body[0]
    //console.log(username)
    sequelize.query(`select user_username from users`).then((dbres1) => {
        // console.log(dbres1[0]) //user_username
        sequelize.query(`select user_password from users`).then((dbres2) => {
            // console.log(dbres2[0]) //user_password && bcrypt.compareSync(password, dbres2[0][i].hash)
            for(let i = 0; i < dbres1[0].length; i++){
                if(dbres1[0][i].user_username === username && bcrypt.compareSync(password, dbres2[0][i].user_password)){
                    //console.log(dbres2[0][i])
                    pass = true
                    res.status(200).send(pass)
                    return
                }
            }
            res.status(404).send(pass)
        }).catch(err => console.log('select user_username from users fail', err))
    }).catch(err => console.log('select user_username from users fail', err))
    // sequelize
    //   .query(`

    //     `)
    //   .then(() => {
    //     console.log("User DB seeded");
    //     res.sendStatus(200);
    //   })
    //   .catch((err) => console.log("error seeding user DB", err));
  },
  setCookie: (req,res) => {
    res.status(202).cookie('Name', 'Alex Baranoff', {
        sameSite: 'strict',
        path: '/',
        expires: new Date(new Date().getTime() + 20 * 1000),
        httpOnly: true,
    }).send("Cookie being made")
}
};
