const models = require('../models');

const PostsSeedFunc = () => {
	models.Post.sync({force: true})
		.then(() => {
			models.Post.bulkCreate([

				//CHUCK PLEASE ADD MORE RECORDS HERE AS THE EXAMPLE BELOW. ONCE U ARE DONE YOU CAN RUN  FOLLOWING THE INSTRUCTIONS ON COLLEGESEED.JS FILE

				{
					bookTitle: 'Book Introduction to Java',
					userName: 'Luis Carbajal', 
					condition: 'Brand New', 
					format: 'Cover Paper', 
					deparment: 'Computer Science', 
					course: 'Java 101', 
					price: '55',
					image:'public/uploads/java.jpg', 
					description:'For undergraduate level courses in Java, or Java as a second language programming, this introduction covers JDK 1.4 and JBuilder 9, the latest principles in programming, and core Java features.'
				},

				

		]);
	})
};

module.exports = PostsSeedFunc;

   
    
