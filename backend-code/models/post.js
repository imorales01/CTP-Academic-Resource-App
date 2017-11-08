
const User = require('./user');
// composite index groups of equities
module.exports = (sequelize, DataTypes) => {
  const Post = sequelize.define('Post', {
    slug: {
      type: DataTypes.STRING,
      unique: 'compositeIndex',
      allowNull: true,
      validate: {
        notEmpty: true,
      },
    },
    title: {
      type: DataTypes.STRING,
      unique: 'compositeIndex',
      allowNull: false,
      validate: {
        notEmpty: true,
      },
    },
    body: {
      type: DataTypes.STRING,
      allowNull: false,
      validate: {
        notEmpty: true,
      },
    },

  })

  Post.associate = (models) => {
    models.Post.belongsTo(models.User);
  }

  return Post
}

