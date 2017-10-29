const express = require('express')
const models = require('../models')
const router = express.Router()


router.get('/test', (req, res) => {
  res.json({
    'msg': 'hey there Angie',
  });
})

//  gets all colleges
router.get('/', (req, res) => {
  
  models.College.findAll()
    .then((data) => {
      res.json(data)
    })
    .catch((err) => {
      console.log('ERROR while getting findAll Colleges', err)
      res.redirect('/error')
    })
})

//  creates a college
router.post('/', (req, res) => {
  models.College.create({
    name: req.body.name,
    address: req.body.address,
    phoneNumber: req.body.phoneNumber,
    website: req.body.website
  })
    .then((college) => {
      res.json(college)
    })
    .catch((err) => {
      console.log('ERROR while creating a new College', err)
      res.json('/error')
    })
})

//  gets a college by id
router.get('/:id', (req, res) => {
  models.College.findOne({
    where: {id: req.params.id}
  })
    .then((collegeInfo) => {
      res.json(collegeInfo)
    })
    .catch((err) => {
      console.log('ERROR while getting a College information', err)
      res.redirect('/error')
    })
})

//  updates a college
router.put('/:id', (req, res) => {
  models.College.findOne({
    where: {id: req.params.id}
  })
    .then((collegeInfo) => {
      collegeInfo.update({
        name: req.body.name,
        address: req.body.address,
        phoneNumber: req.body.phoneNumber,
        website: req.body.website
      })
    })
    .then(() => {
      models.College.findOne({
        where: {id: req.params.id}
      })
        .then((user) => {
          res.json(user)
        })
    })
    .catch((err) => {
      console.log('ERROR while getting a College information', err)
      res.redirect('/error')
    })
})

//  deletes a college
router.delete('/:id', (req, res) => {
  models.College.destroy({
    where: {id: req.params.id}
  })
    .then((id) => {
      res.json('Successufully deleted!')
    })
})

//  SEARCH college by name. NOTE: 'name:' is any key I defined,use to access the req. 
router.get('/search/:name', (req, res) => {
  models.College.findAll({
    where: {
      name: {
        $like: '%' + req.params.name + '%'
      }
    }
  })
    .then((data) => {
      res.json(data)
    })
    .catch((err) => {
      console.log('ERROR while getting findAll Colleges', err)
      res.redirect('/error')
    })
})

module.exports = router
