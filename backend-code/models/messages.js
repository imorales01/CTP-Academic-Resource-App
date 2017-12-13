module.exports = (sequelize, DataTypes) => {
	const Messages = sequelize.define('Messages', {
		fromUserName: DataTypes.STRING,
		toWhomUserId: DataTypes.STRING,
		message: DataTypes.STRING,
	});

	Messages.associate = (models) => {
		models.Messages.belongsTo(models.User);
		models.User.hasMany(models.Messages); 
	}
	return Messages;
};
