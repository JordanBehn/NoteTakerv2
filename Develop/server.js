// Dependencies
var express = require("express");
var path = require("path");

// Sets up the Express App
var app = express();
var PORT = 3500;

// Sets up Express to handle data
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

// Require Routes.js 
//require("./routes.js")(app);
 
// Listener
app.listen(PORT, function() {
    console.log("App listening on PORT: " + PORT);
});