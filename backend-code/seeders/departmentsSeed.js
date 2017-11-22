const models = require('../models');

const departmentsSeedFunc = () => {
	models.Departments.sync({force: true})
		.then(() => {
			models.Departments.bulkCreate([
				{departmentName: 'Book Introduction to Java', departmentChairman: 'Justin Greet'},
		]);
	})
};

module.exports = departmentsSeedFunc;
