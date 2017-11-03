module.exports = (sequelize, DataTypes) => {
  const College = sequelize.define('College', {
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

  College.associate = (models) => {
    // uncomment for associations when Department models is ready 
    // models.College.hasMany(models.Department)
  }
  return College
}
