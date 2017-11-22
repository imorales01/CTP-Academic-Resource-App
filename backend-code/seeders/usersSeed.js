const models = require('../models');

const UsersSeedFunc = () => {
	models.User.sync({force: true})
		.then(() => {
			models.User.bulkCreate([
				{firstName: 'John', lastName: 'Mrz', userName: 'John123', email: 'John@gmail.com', cunyId:'001', college: 'City Tech', password_hash: '$2a$10$3xwiwQQntK5HVXySfrPnVebJKMSJEvwibpHDSdYP51MI.qaZw93Ei' },
		]);
	})
};

module.exports = UsersSeedFunc;

    
    
    