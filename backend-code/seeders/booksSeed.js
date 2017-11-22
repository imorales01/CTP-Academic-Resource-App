const Sequelize = require('sequelize');
const models = require('../models');


const BooksSeedFunc = () =>{
	models.Books.sync({force: true})
		.then(() => {
			models.Books.bulkCreate([
				{title: 'Introduction to Java', author: 'Albert Bennet', year:'2017', edition: 'Second Edition', format: 'Paper Cover'},
		]);
	})
	.catch((err) => console.log(err));
};

module.exports = BooksSeedFunc;
