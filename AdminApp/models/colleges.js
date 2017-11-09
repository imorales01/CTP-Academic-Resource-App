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
    // uncomment for associations when Department models is ready 
    // models.College.hasMany(models.Department)
  }
  return Colleges
}
