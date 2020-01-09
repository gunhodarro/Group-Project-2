var Sequelize = require("sequelize");
var sequelize = require("../config/connection.js");

var User = sequelize.define("user", {
  userEmail: Sequelize.STRING,
  city: Sequelize.STRING,
  category: Sequelize.STRING,
  searchKeyword: Sequelize.STRING,
  priceMin: Sequelize.INTEGER,
  priceMax: Sequelize.INTEGER
});

User.sync();

module.exports = User;
