const Orders = require('../models').Order
const Events = require('../models').Event
const Profiles = require('../models').User
const Categories = require('../models').Category
const Sequelize = require('sequelize')
const Op = Sequelize.Op

exports.newOrder = (req,res) => {
  Orders.create(req.body)
    .then(data => {
      Orders.findOne({
        include:[
          {
            model: Events,
            as:'event',
            attributes:{
              exclude:[
                "category_id",
                "user_id",
                "createdAt",
                "updatedAt"
              ]
            },
            include:[
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
              },
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
            ]
          }
        ],
        where:{
          id: data.id
        },
        attributes:{
          exclude:[
            "createdAt",
            "updatedAt",
            "event_id",
            "user_id"
          ]
        }
      })
      .then(result => {
        res.send(result)
      })
    })
    .catch(err => {
      res.status(500).json({
        msg:'Internal server error',
        err
      })
    })
}

exports.confirmOrder = (req,res) => {
  let input = {
    status: 'confirmed'
  };
  Orders.update(input,{ where:{ id: req.params.id }})
  .then(data => {
      res.status(200).json({
        msg:'Your payment has been confirmed',
        data
      })
    })
  .catch(err => {
    res.status(500).json({
      msg:'Internal server error',
      err
    })
  })
}

exports.goingToBePaid = (req,res) => {
  Orders.findOne({
    include:[
      {
        model:Events,
        as:'event',
        attributes:{
          exclude:[
            'category_id',
            'user_id',
            'createdAt',
            'updatedAt',    
          ]
        },
        include:[
          {
            model:Categories,
            as:'category',
            attributes:{
              exclude:[
                'createdAt',
                'updatedAt',
              ]
            } 
          },
          {
            model:Profiles,
            as:'created_by',
            attributes:{
              exclude:[
                'createdAt',
                'updatedAt',
                'password'
              ]
            }
          }
        ]
      },
      {
        model:Profiles,
        as:'buyer',
        attributes:{
          exclude:[
            'createdAt',
            'updatedAt',
            'password'
          ]
        }
      }
    ],
    where: { 
      id: req.params.id,
      user_id: req.id
    }
  }).then(data => {
    if(data === null){
      res.status(200).json({msg:'Data not found'})
    } else {
      res.status(200).json(data)
    }
    })
    .catch(err => {
      res.status(500).json({
        msg:'Internal server error',
        err
      })
    })
}

exports.getAllApproved = (req,res) => {
  let status = req.query.status
      
  Orders.findAll({
    include:[
      {
        model:Events,
        as:'event',
        attributes:{
          exclude:[
            'category_id',
            'user_id',
            'createdAt',
            'updatedAt',    
          ]
        },
        include:[
          {
            model:Categories,
            as:'category',
            attributes:{
              exclude:[
                'createdAt',
                'updatedAt',
              ]
            } 
          },
          {
            model:Profiles,
            as:'created_by',
            attributes:{
              exclude:[
                'createdAt',
                'updatedAt',
                'password'
              ]
            }
          }
        ]
      },
      {
        model:Profiles,
        as:'buyer',
        attributes:{
          exclude:[
            'createdAt',
            'updatedAt',
            'password'
          ]
        }
      }
    ],
    where:{
        status: status,
        user_id: req.id
    },
    attributes:{
      exclude:[
        'event_id',
        'createdAt',
        'updatedAt'
      ]
    }
  })
    .then(data => {
      res.status(200).json(data)
    })
    .catch(err => {
      res.status(500).json({
        msg:'Internal server error',
        err
      })
    })
}
