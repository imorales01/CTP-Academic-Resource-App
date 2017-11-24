module.exports = (sequelize, DataTypes) => {

  const Colleges = sequelize.define('Colleges', {
    name: {
      type: DataTypes.STRING,
      allowNull: false,
      validate: {
        notEmpty: false
      }
    },
    address: {
      type: DataTypes.STRING,
      allowNull: false,
      validate: {
        notEmpty: true
      }
    },
    phoneNumber: {
      type: DataTypes.STRING,
      allowNull: false,
      validate: {
        notEmpty: true
      }
    },
    website: {
      type: DataTypes.STRING,
      allowNull: false,
      validate: {
        notEmpty: true
      }
    }
  })
  
  Colleges.associate = (models) => {
    models.Colleges.hasMany(models.Departments)
  }
  return Colleges
}
