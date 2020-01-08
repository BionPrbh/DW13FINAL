const models = require("../models");
const User = models.User;
const bcrypt = require("bcrypt");
const encryptPass = require("../helpers/passEncrypter");
const tokenGenerator = require("../helpers/tokenGenerator");

exports.login = (req, res) => {
  let { email, password } = req.body;
  User.findOne({
    where: { email }
  })
    .then(user => {
      if (user) {
        if (bcrypt.compareSync(password, user.password)) {
          let payload = {
            id: user.id,
            email: user.email
          };
          res.status(200).json({
            email: user.email,
            token: tokenGenerator(payload)
          });
        } else {
          res.status(400).json({
            msg: "Wrong password"
          });
        }
      } else {
        res.status(400).json({
          msg: "Email not found"
        });
      }
    })
    .catch(err => {
      res.status(500).json({
        msg: "Internal Server Error",
        Error: err
      });
    });
};

exports.register = (req, res) => {
  let { fullname, username, email, password } = req.body;
  User.findAll({
    where: {
      username
    }
  })
    .then(foundUsername => {
      if(foundUsername.length > 0) {
        res.status(200).json({
          msg : 'Username already taken'
        })
      } else {
        User.findAll({
          where: {
            email
          }
        })
          .then(foundEmail => {
            if(foundEmail.length > 0) {
              res.status(200).json({
                msg : 'Email has been registered'
              })
            } else {
              User.create({
                fullname: fullname,
                username: username,
                email: email,
                password: encryptPass(password),
              })
                .then(newUser => {
                  let payload = {
                    id: newUser.id,
                    email: newUser.email
                  }
                  res.status(201).json({
                    email: newUser.email,
                    token: tokenGenerator(payload)
                  })
                })
                .catch(err => {
                  res.status(500).json({
                    msg : 'Internal server error',
                    Error: err
                  })
                })
            }
          })
      }      
    })
    .catch(err => {
      res.status(500).json({
        msg : 'Internal server error',
        Error: err
      })
    })
};