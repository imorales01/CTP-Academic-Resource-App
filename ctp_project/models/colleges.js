module.exports = (sequelize, DataTypes) => {
  const Colleges = sequelize.define('Colleges', {
    name: DataTypes.TEXT,
    address: DataTypes.TEXT,
    phoneNumber: DataTypes.TEXT,
    state: DataTypes.TEXT,
    collegeDirector: DataTypes.TEXT,
    website: DataTypes.TEXT
  }, {
    classMethods: {
      associate: function(models) {
        // associations can be defined here one to many
        models.Colleges.hasMany(models.Deparments)
      }
    }
  });
  return Colleges;
};


