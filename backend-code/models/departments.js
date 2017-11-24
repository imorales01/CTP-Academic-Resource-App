module.exports = (sequelize, DataTypes) => {
	const Departments = sequelize.define('Departments', {
		departmentName: DataTypes.STRING,
		departmentChairman: DataTypes.STRING
	});

	Departments.associate = (models) => {
		models.Departments.belongsTo(models.Colleges);
		models.Departments.hasMany(models.Courses);
	}
	return Departments;
};