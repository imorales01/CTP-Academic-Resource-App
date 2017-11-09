const express = require('express');
const models = require('../models');
const router = express.Router();

// gets all departments
router.get('/', (req, res) => {
  models.Departments.findAll()
    .then((allDepartments) => {
      res.json(allDepartments);
    })
    .catch((err) => {
      console.log('Failure GET to '/' route (displaying all colleges');
      res.redirect('/error');
    })
});

// makes a department
router.post('/', (req, res) => {
  models.Departments.create({
    	departmentName: req.body.departmentName,
		departmentChairman: req.body.departmentChairman
  })
  .then((department) => {
    res.json(department);
  })
  .catch(() => {
    res.sendStatus(400);
  })
});

// gets a department
router.get('/:id', (req, res) => {
  models.Departments.findById(parseInt(req.params.id))
  .then((department) => {
	    res.json(department);
	  })
	  .catch(() => {
	    res.sendStatus(400);
	  })
});

// updates a department
router.put('/:id', (req, res) => {
	models.Departments.findById(parseInt(req.params.id))
		.then(department => {
			department.update({
				departmentName: req.body.departmentName,
				departmentChairman: req.body.departmentChairman
			});
			res.sendStatus(200);
		})
		.catch(() => {
    		console.log('error here')
    	  	res.sendStatus(400);
    	});
});

// removes a department
router.delete('/:id', (req, res) => {
	models.Departments.findById(parseInt(req.params.id))
		.then(department => { 
			//models.Courses.destroy({
			//	where: {DepartmentId: req.params.id}
			//});
			department.destroy();
			res.sendStatus(200);
		})
		.catch(() => {
			res.sendStatus(400);
		});
});

module.exports = router;