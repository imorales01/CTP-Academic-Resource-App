const Sequelize = require('sequelize');
const models = require('../models');

const BooksSeedFunc = () =>{
	models.Books.sync({force: true})
		.then(() => {
			models.Books.bulkCreate([

				{
					title: 'Introduction to Java', 
					author: 'Albert Bennet', 
					year:'2017', 
					edition: 'Second Edition', 
					format: 'Paper Cover', 
					image:'public/uploads/java.jpg', 
					description:'For undergraduate level courses in Java, or Java as a second language programming, this introduction covers JDK 1.4 and JBuilder 9, the latest principles in programming, and core Java features.'
			  },

				//CHUCK PLEASE ADD MORE RECORDS HERE AS THE EXAMPLE ABOVE. ONCE U ARE DONE YOU CAN RUN  FOLLOWING THE INSTRUCTIONS ON COLLEGESEED.JS FILE
		]);
	})
	.catch((err) => console.log(err));
};

module.exports = BooksSeedFunc;
