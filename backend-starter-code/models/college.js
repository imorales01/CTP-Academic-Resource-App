module.exports = (sequelize, DataTypes) => {
  var College = sequelize.define('College', {
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
        // models.College.hasMany(models.Deparment)
      }
    }
  });
  return College;
};


