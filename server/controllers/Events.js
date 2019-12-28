const Events = require('../models').Event
const Users = require('../models').User
const Categories = require('../models').Category
const Profiles = require('../models').Profile

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
    where:{
      id: req.params.id
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
        "createdAt",
        "updatedAt"
      ]
    },
    where:{
      startTime: startTime
    }
  }).then(data => {
    res.status(200).json(data)
  })
}

// exports.getEventsQueryTomorrow = (req,res) => {
//   let startTime = req.query.start_time_gte;
//   console.log(startTime);
//   Events.findAll({
//     include:[
//       {
//         model: Categories,
//         as: 'category',
//         attributes: {
//           exclude:[
//             "createdAt",
//             "updatedAt"
//           ]
//         }
//       },
//       {
//         model: Users,
//         as: 'created_by',
//         attributes: {
//           exclude:[
//             "password",
//             "img",
//             "createdAt",
//             "updatedAt"
//           ]
//         }
//       }
//     ],
//     attributes:{
//       exclude:[
//         "category_id",
//         "createdAt",
//         "updatedAt"
//       ]
//     },
//     where:{
//       startTime: startTime
//     }
//   }).then(data => {
//     res.status(200).json(data)
//   })
// }

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