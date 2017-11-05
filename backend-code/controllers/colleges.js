const express = require('express');
const models = require('../models');
const router = express.Router();

//gets all colleges
router.get('/', (req, res) => {
  models.Colleges.findAll()
  .then((data) => {
    res.send(data)
  })
  .catch((err) => {
      console.log('Failure GET to '/' route (displaying all colleges');
      res.redirect('/error');
    })
});


//makes a college
router.post('/', (req, res) => {
  models.Colleges.create({
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
      console.log('Failure POST to '/' route (creating a college');
      res.send('/error');
    })
});


//gets a college by id
router.get('/:id', (req, res) => {
  models.Colleges.findById(parseInt(req.params.id))
  .then((collegeInfo) => { 
    res.send(college);
  })
  .catch((err) => {
      console.log('Failure GET '/' route (displaying a single college');
      res.redirect('/error');
    })
});

//updates a colleges
router.put('/:id', (req, res) => {
  models.Colleges.findById(parseInt(req.params.id))
  .then((collegeInfo) => {
    collegeInfo.update({
      name: req.body.name,
      address: req.body.address,
      phoneNumber: req.body.phoneNumber,
      state: req.body.state,
      collegeDirector: req.body.collegeDirector,
      website: req.body.website,
    })
    res.sendStatus(200);
  })
  .catch((err) => {
      console.log('Failure PUT '/' route (updating a college');
      res.redirect('/error');
  })
});

//deletes a college
router.delete('/:id', (req, res) => {
  models.Colleges.findById(parseInt(req.params.id))
  .then((college) => {
    college.destroy();
    res.sendStatus(200);
  })
  .catch((err) => {
      console.log('Failure DELETE '/' route (deleting a college');
      res.redirect('/error');
  })
});

/*
//SEARCH :name = is any key I defined,use to access the req. 
router.get('/search/:name', (req, res) => {
  models.Colleges.findAll({
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
*/

module.exports = router;
