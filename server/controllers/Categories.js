const Categories = require('../models').Category
const Events = require('../models').Event
const Profiles = require('../models').User

// GET articles
exports.getAllCategories = (req,res) => {
  Categories.findAll()
    .then(data => {
      res.status(200).json(data)
    })
    .catch(err => {
      res.status(500).json({
        msg:'Internal server error'
      })
    })
}
// handle date time pakai moment
// gte dari mongo shell

// GET all events of a category
exports.getAllEventsOfACategory = (req,res) => {
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
        model: Profiles,
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
        "createdAt",
        "updatedAt"
      ]
    },
    where:{
      category_id: req.params.id
    }
  }).then(data => {
    res.status(200).json(data)
  })
}

exports.getOneCategory = (req,res) =>{
  Categories.findOne({
    where:{
      id: req.params.id
    }
  }).then(data => {
    res.status(200).json(data)
  })
    .catch(err => {
      res.status(500).json({
        msg:'Internal Server Error',
        err
      })
    })
}