const Profiles = require('../models').User
const Favorites = require('../models').Favorite
const Events = require('../models').Event
const Categories = require('../models').Categories

const bcrypt = require("bcrypt");
const encryptPass = require("../helpers/passEncrypter");
const tokenGenerator = require("../helpers/tokenGenerator");

exports.register = (req, res) => {
  let { name, username, email, password } = req.body;
  console.log(req.body);
  
  Profiles.findAll({
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
        Profiles.findAll({
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
              Profiles.create({
                name: name,
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

exports.login = (req, res) => {
  let { username, password } = req.body;
  Profiles.findOne({
    where: { username }
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

exports.getOne = (req,res) => {
  Profiles.findOne({
    attributes:{
      exclude:[
        'username',
        'password',
        'createdAt',
        'updatedAt'
      ]
    },
    where:{
      id: req.params.id
    }
  }).then(data => {
      res.status(200).json(data)
    })
    .catch(err => {
      res.status(404).json({
        msg:'User not found',
        err
      })
    })
}

exports.getFavorited = (req,res) => {
  Favorites.findAll({
    where:{
      user_id: req.params.id
    }
  }).then(data => {
    // let favorited = []
    // data.map((details) => {
    //   Events.findAll({
        // include:[
        //   {
        //     model: Categories,
        //     as: 'category',
        //     attributes: {
        //       exclude:[
        //         "createdAt",
        //         "updatedAt"
        //       ]
        //     }
        //   },
        //   {
        //     model: Profiles,
        //     as: 'created_by',
        //     attributes: {
        //       exclude:[
        //         "password",
        //         "img",
        //         "createdAt",
        //         "updatedAt"
        //       ]
        //     }
        //   }
        // ],
        // attributes:{
        //   exclude:[
        //     "category_id",
        //     "createdAt",
        //     "updatedAt"
        //   ]
        // },
      //   where:{
      //     id: details.event_id
      //   }
      // }).then(eachEvent => {
      //   favorited.push(eachEvent)
      // })
      // })
      // res.status(200).json(data)
      res.send(data)
    })
    // console.log(favorited);
    
    // res.send(favorited)
    // .catch(err => {
    //   res.status(404).json({
    //     msg:'Internal server error',
    //     err
    //   })
    // })
}