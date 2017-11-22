const models = require('../models');

const CoursesSeedFunc = () => {
	models.Courses.sync({force: true})
		.then(() => {
			models.Courses.bulkCreate([
				{courseName: 'Introduction to Java', courseTeacher: 'Justin Greet'},
		]);
	})
};

module.exports = CoursesSeedFunc;
