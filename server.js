// Dependencies
var express = require("express");
var path = require("path");

// Sets up the Express App
var app = express();
var PORT = 5000;

// Sets up Express to handle data
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

// Set up routes 
require("./routes/apiRoutes")(app);
require("./routes/htmlRoutes")(app);

// Listener
app.listen(process.env.PORT || 5000, function() {
    console.log("App listening on PORT: " + PORT);
});