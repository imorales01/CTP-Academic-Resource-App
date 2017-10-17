const express = require('express');
const models = require('../models');
const router = express.Router();

//gets all colleges
router.get('/', (req, res) => {
  models.College.findAll()
  .then((data) => {
    res.send(data)
  })
  .catch((err) => {
      console.log('ERROR while getting findAll Colleges');
      res.redirect('/error');
    })
});


//makes a college
router.post('/', (req, res) => {
  models.College.create({
      name: req.body.name,
      address: req.body.address,
      phoneNumber: req.body.phoneNumber,
      state: req.body.state,
      collegeDirector: req.body.collegeDirector,
      website: req.body.website,
    })
    .then((college) => {
      res.send(college);
    })
    .catch((err) => {
      console.log('ERROR while creating a new College');
      res.send('/error');
    })
});


//gets a college
router.get('/:id', (req, res) => {
  models.College.findOne({
    where: {id: req.params.id}
  })
  .then((collegeInfo) => { 
    res.send(collegeInfo);
  })
  .catch((err) => {
      console.log('ERROR while getting a College information');
      res.redirect('/error');
    })
});



//updates a colleges FLAG
router.put('/:id', (req, res) => {
  models.College.findOne({
    where: {id: req.params.id}
  })
  .then((collegeInfo) => {
    collegeInfo.update({
    name: req.body.name,
    address: req.body.address,
    phoneNumber: req.body.phoneNumber,
    state: req.body.state,
    collegeDirector: req.body.collegeDirector,
    website: req.body.website,
   })
  })
  .then(() => { 
    res.json();
  })
  .catch((err) => {
      console.log('ERROR while getting a College information');
      res.redirect('/error');
    })
});


//deletes a college
router.delete('/:id', (req, res) => {
  models.College.findOne({
    where: {id: req.params.id}
  })
  .then((id)=>{res.send(id.name + ' has been deleted!')})
});


//SEARCH :name = is any key I defined,use to access the req. 
router.get('/search/:name', (req, res) => {
  models.College.findAll({
   where: {
     name: {
       $like: '%' + req.params.name + '%'
     }
   }
 })
 .then((data) => {
    res.send(data)
 })
  .catch((err) => {
      console.log('ERROR while getting findAll Colleges');
      res.redirect('/error');
    })
});




module.exports = router;
