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
    const { firstname, lastname, phoneNumber, email, password } = req.body[0]
    //
    sequelize.query(`select user_email from users`)
    .then((dbRes) => {
      for(let i = 0; i < dbRes[0].length; i++){
        // console.log(dbRes[0][i].user_email)
        if(dbRes[0][i].user_email === email){
          // console.log(dbRes[0][i].user_email)
          // res.status(401).send('User could not be added')
          // return
          console.log(dbRes[0][i].user_email + ' in loop')
          res.status(409).send('Email is used')
          return
        }
      }
      const salt = bcrypt.genSaltSync(5)
      const hash = bcrypt.hashSync(password, salt)
      sequelize.query(`
      insert into users(user_firstname,user_lastname,user_phonenumber,user_email,user_password)
      values('${firstname}','${lastname}','${phoneNumber}','${email}','${hash}');
      `).then(() => {
          console.log('New user added')
          res.status(200).send("user added")
      }).catch(err => console.log('User could not be added', err))
    }).catch(err => console.log('email taken'))
  },
  login: (req,res) => {
    //console.log(req.body)
    let pass = false
    const { email, password } = req.body[0]
    //console.log(username)
    sequelize.query(`select user_email from users`).then((dbres1) => {
        // console.log(dbres1[0]) //user_email
        sequelize.query(`select user_password from users`).then((dbres2) => {
            // console.log(dbres2[0]) //user_password && bcrypt.compareSync(password, dbres2[0][i].hash)
            for(let i = 0; i < dbres1[0].length; i++){
                if(dbres1[0][i].user_email === email && bcrypt.compareSync(password, dbres2[0][i].user_password)){
                    //console.log(dbres2[0][i])
                    pass = true
                    console.log(req.session.cookie)
                    res.status(200).send(pass)
                    return
                }
            }
            res.status(404).send(pass)
        }).catch(err => console.log('select user_password from users fail', err))
    }).catch(err => console.log('select user_email from users fail', err))
  }
};
