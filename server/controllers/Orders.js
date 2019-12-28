const Orders = require('../models').Order
const Events = require('../models').Event
const Profiles = require('../models').User
const Categories = require('../models').Category

exports.newOrder = (req,res) => {
  Orders.create(req.body)
    .then(data => {
      Orders.findOne({
        include:[
          {
            model:Events,
            as:'event',
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
            }
          }
        ],
        where:{
          id: data.id
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

exports.getAllConfirmed = (req,res) => {
  let states = req.query.status
  let status = ''
  if(states === 'approved'){
    status = 'confirmed'
    Orders.findAll({
      include:[
        {
          model:Events,
          as:'event',
          attributes:{
            exclude:[
                 
            ]
          },
          include:[
            {
              model:Categories,
              as:'category'
            },
            {
              model:Profiles,
              as:'created_by'
            }
          ]
        },
        {
          model:Profiles,
          as:'buyer',
          attributes:{
            exclude:[
              
            ]
          }
        }
      ],
      where:{
        status:status
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
}