module.exports = (sequelize, DataTypes) => {
	const Books = sequelize.define('Books', {
		title: DataTypes.STRING,
		author: DataTypes.STRING,
		year: DataTypes.STRING,
		edition: DataTypes.STRING,
		format: DataTypes.STRING
	});
	/*
	Book.associate = (models) => {
		models.Book.belongsTo(models.Course);
	}
	*/
	return Books;
};
