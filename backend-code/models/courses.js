module.exports = (sequelize, DataTypes) => {
	const Courses = sequelize.define('Courses', {
		courseName: DataTypes.STRING,
		courseTeacher: DataTypes.STRING
	});

	Courses.associate = (models) => {
		models.Courses.hasMany(models.Books);
		models.Courses.belongsTo(models.Departments);
	}
	return Courses;
};