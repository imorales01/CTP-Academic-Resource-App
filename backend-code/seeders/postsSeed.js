const models = require('../models');

const PostsSeedFunc = () => {
	models.Post.sync({force: true})
		.then(() => {
			models.Post.bulkCreate([
				{bookTitle: 'Book Introduction to Java', userName: 'Luis Carbajal', condition: 'Brand New', format: 'Cover Paper', deparment: 'Computer Science', course: 'Java 101', price: '55'},
		]);
	})
};

module.exports = PostsSeedFunc;

   
    
