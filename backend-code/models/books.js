module.exports = (sequelize, DataTypes) => {
	const Books = sequelize.define('Books', {
		title: DataTypes.STRING,
		author: DataTypes.STRING,
		year: DataTypes.STRING,
		edition: DataTypes.STRING,
		format: DataTypes.STRING
	});

	Books.associate = (models) => {
		models.Books.belongsTo(models.Courses);
	}
	return Books;
};
