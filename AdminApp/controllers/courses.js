const express = require('express');
const models = require('../models');
const router = express.Router();

// gets all Courses
router.get('/', (req, res) => {
  models.Courses.findAll()
    .then((allCourses) => {
      res.json(allCourses);
    })
    .catch((err) => {
      console.log('Failure GET to '/' route (displaying all courses');
      res.redirect('/error');
    })
});

// makes a course
router.post('/', (req, res) => {
  models.Courses.create({
    	courseName: req.body.courseName,
		courseTeacher: req.body.courseTeacher
  })
  .then((course) => {
    res.json(course);
  })
  .catch(() => {
    res.sendStatus(400);
  })
});

// gets a course
router.get('/:id', (req, res) => {
  models.Courses.findById(parseInt(req.params.id))
  .then((course) => {
	    res.json(course);
	  })
	  .catch(() => {
	    res.sendStatus(400);
	  })
});

// updates a course
router.put('/:id', (req, res) => {
	models.Courses.findById(parseInt(req.params.id))
		.then(course => {
			course.update({
				courseName: req.body.courseName,
				courseTeacher: req.body.courseTeacher
			});
			res.sendStatus(200);
		})
		.catch(() => {
    		console.log('error here')
    	  	res.sendStatus(400);
    	});
});

// removes a course
router.delete('/:id', (req, res) => {
	models.Courses.findById(parseInt(req.params.id))
		.then(course => { 
			//models.Courses.destroy({
			//	where: {courseId: req.params.id}
			//});
			course.destroy();
			res.sendStatus(200);
		})
		.catch(() => {
			res.sendStatus(400);
		});
});

module.exports = router;