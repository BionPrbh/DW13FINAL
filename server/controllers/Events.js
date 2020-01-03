const Events = require('../models').Event
const Users = require('../models').User
const Categories = require('../models').Category
const Profiles = require('../models').Profile
const moment = require('moment')
var Sequelize = require('sequelize');
const Op = Sequelize.Op

exports.getAllEvents = (req,res) => {
  Events.findAll()
    .then(data => res.send(data))
    .catch(err => {
      res.status(500).json({
        msg:'Internal server error'
      })
    })
}

exports.getAnEvent = (req,res) => {
  Events.findOne({
    include:[
      {
        model: Categories,
        as: 'category',
        attributes: {
          exclude:[
            "createdAt",
            "updatedAt"
          ]
        }
      },
      {
        model: Users,
        as: 'created_by',
        attributes: {
          exclude:[
            "password",
            "img",
            "createdAt",
            "updatedAt"
          ]
        }
      }
    ],
    attributes:{
      exclude:[
        "category_id",
        "user_id",
        "createdAt",
        "updatedAt"
      ]
    },
    where:{
      id: req.params.id
    }
  }).then(data => {
    res.status(200).json(data)
  })
    .catch(err => {
      res.status(500).json({
        msg:'Internal server error',
        err
      })
    })
}

exports.getEventByTitle = (req,res) => {
  Events.findAll({
    where:{
      title: {
        [Op.substring]: req.query.title}
    }
  }).then(data => {
    res.status(200).json(data)
  })
    .catch(err => {
      res.status(500).json({
        msg:'',
        err
      })
    })
}

exports.getEventsQueryToday = (req,res) => {
  let startTime = req.query.start_time;
  console.log(startTime);
  Events.findAll({
    include:[
      {
        model: Categories,
        as: 'category',
        attributes: {
          exclude:[
            "createdAt",
            "updatedAt"
          ]
        }
      },
      {
        model: Users,
        as: 'created_by',
        attributes: {
          exclude:[
            "password",
            "img",
            "createdAt",
            "updatedAt"
          ]
        }
      }
    ],
    attributes:{
      exclude:[
        "category_id",
        "user_id",
        "createdAt",
        "updatedAt"
      ]
    },
    where:{
      startTime: {
        [Op.substring]: startTime
      }
    }
  }).then(data => {
    res.status(200).json(data)
  })
}

exports.newEvents = (req,res) => {
  Events.create(req.body)
    .then(data => {
      res.status(200).json({
        msg:'successfully added an event',
        data
      })
    })
    .catch(err => {
      res.status(500).json({
        msg:'internal server error',
        err
      })
    })
}