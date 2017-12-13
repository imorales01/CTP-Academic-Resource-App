const Sequelize = require('sequelize');
const models = require('../models');
let BooksSeedFunc = require('./booksSeed');
let DepartmentsSeedFunc = require('./departmentsSeed');
let PostsSeedFunc = require('./postsSeed');
let UsersSeedFunc = require('./usersSeed');
let CoursesSeedFunc = require('./coursesSeed');

const CollegesSeedFunc = () => {
	//Colleges.sync will create the grades table
	models.Colleges.sync({force: true})
	//add the following Colleges to the database:
		.then(() => {
			models.Colleges.bulkCreate([
				


				//CHUCK PLEASE ADD MORE RECORDS HERE AS THE EXAMPLE BELOW. ONCE U ARE DONE YOU CAN RUN  FOLLOWING THE INSTRUCTIONS ON COLLEGESEED.JS FILE
				{
					name: 'City Tech', 
					address: '300 Jay St, Brooklyn, NY 11201', 
					phoneNumber:'(718) 260-5500', 
					website: 'http://www.citytech.cuny.edu/', 
				},

			]);
		})
		.catch((err) => console.log(err));
};


// cd into seeders Uncomment one line at the time starting with line 24 and run: node collegeSeed.js 
// CollegesSeedFunc();
// DepartmentsSeedFunc();
// BooksSeedFunc();
// UsersSeedFunc();
PostsSeedFunc()
// CoursesSeedFunc()

module.exports = CollegesSeedFunc;
