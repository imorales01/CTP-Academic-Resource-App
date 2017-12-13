const models = require('../models');

const CoursesSeedFunc = () => {
	models.Courses.sync({force: true})
		.then(() => {
			models.Courses.bulkCreate([
				
				//CHUCK PLEASE ADD MORE RECORDS HERE AS THE EXAMPLE BELOW. ONCE U ARE DONE YOU CAN RUN  FOLLOWING THE INSTRUCTIONS ON COLLEGESEED.JS FILE

				{
					courseName: 'Introduction to Java', 
					courseTeacher: 'Justin Greet'
				},


				
		]);
	})
};

module.exports = CoursesSeedFunc;
