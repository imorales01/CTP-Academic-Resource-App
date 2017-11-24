const express = require('express')
const models = require('../models')
const router = express.Router()
const Post = require('../models/post');

//  gets a User by userName with all user posts:http://localhost:8000/api/users/Luis123
router.get('/:userName', (req, res) => {
  models.User.findOne({
    where: {userName: req.params.userName},
    include: [{model: models.Post}]
  })
  .then((data) => {
      res.json(data)
    })
    .catch((err) => {
      console.log('ERROR while getting a user with his/her information', err)
      res.redirect('/error')
    })
})

//  gets all User: http://localhost:8000/api/users
router.get('/', (req, res) => {
  models.User.findAll()
    .then((data) => {
      res.json(data)
    })
    .catch((err) => {
      console.log('ERROR while getting findAll SUser', err)
      res.redirect('/error')
    })
})

module.exports = router
