// Require modules for basic server setup
let express = require("express");
let bodyParser = require("body-parser");

// Initialize the server
let app = express();

// Initialize the port
let PORT = process.env.PORT || 8080;

// Make sure the data from the form can be read properly
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());
// Make sure that the app can access files like CSS and Images
app.use(express.static(__dirname + '/public'));

// Grabs the functionality from the API routes and the HTML routes
require("./routes/apiRoutes")(app);
require("./routes/htmlRoutes")(app);

// Start the server on specified port (and remind me, since I'll have doubtless forgot which port this project is using)
app.listen(PORT, function () {
    console.log("App listening on PORT: " + PORT);
});