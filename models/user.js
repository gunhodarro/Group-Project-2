module.exports = function(sequelize, DataTypes) {
  var User = sequelize.define("User", {
    userEmail: {
      type: DataTypes.STRING,
      allowNull: false,
      validate: {
        len: [4]
      }
    },
    password: {
      type: DataTypes.STRING,
      allowNull: false,
      validate: {
        len: [6]
      }
    }
  });

  User.associate = function(models) {
    // Associating Author with Posts
    // When an Author is deleted, also delete any associated Posts
    User.hasMany(models.Search, {
      onDelete: "cascade"
    });
  };

  return User;
};
