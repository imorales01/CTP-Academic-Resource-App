const models = require('../models');

const departmentsSeedFunc = () => {
	models.Departments.sync({force: true})
		.then(() => {
			models.Departments.bulkCreate([
				
				//CHUCK PLEASE ADD MORE RECORDS HERE AS THE EXAMPLE BELOW. ONCE U ARE DONE YOU CAN RUN  FOLLOWING THE INSTRUCTIONS ON COLLEGESEED.JS FILE
				{
					departmentName: 'views Introduction to Java', 
					departmentChairman: 'Justin Greet', 
					collegeId:1
				},


				
		]);
	})
};

module.exports = departmentsSeedFunc;
