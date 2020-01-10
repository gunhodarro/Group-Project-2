var express = require("express");
var path = require("path");
const exphbs = require("express-handlebars");

var app = express();
var PORT = process.env.PORT || 8080;

var db = require("./models");

//handlebars stuff
app.engine(
  "hbs",
  hbs({
    extname: "hbs",
    defaultLayout: "user",
    layoutsDir: __dirname + "/public/handlebars/"
  })
);

app.use(express.urlencoded({ extended: true }));
app.use(express.json());

// Static directory
app.use(express.static("public"));

db.sequelize.sync().then(function() {
  app.listen(PORT, function() {
    console.log("App listening on PORT " + PORT);
  });
});
