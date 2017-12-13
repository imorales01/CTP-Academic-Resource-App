const models = require('../models');

const UsersSeedFunc = () => {
	models.User.sync({force: true})
		.then(() => {
			models.User.bulkCreate([
				
				{
					firstName: 'Luis', 
					lastName: 'Carbajal', 
					userName: 'Luis123', 
					email: 'Luis@gmail.com', 
					cunyId:'001', 
					college: 'City Tech', 
					image:'public/uploads/Luis.jpg', 
					password_hash: '$2a$10$chOlD1UUr3Fznp5Bn7cm.uJLkHXUtSnG/LC8g3T2GpwMYSARiHLfC' 
			  },

			  //CHUCK PLEASE ADD MORE RECORDS HERE AS THE EXAMPLE ABOVE. ONCE U ARE DONE YOU CAN RUN  FOLLOWING THE INSTRUCTIONS ON COLLEGESEED.JS FILE 


		]);
	})
};

module.exports = UsersSeedFunc;

    
    
    