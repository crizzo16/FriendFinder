// Load Files
var path = require("path");

// Export certain functions
module.exports = function(app) {
    // Grab the HTML for the survey page
    app.get("/survey", function(req, res) {
        res.sendFile(path.join(__dirname, "../public/survey.html"));
    });

    // Grab the HTML for the home page (aka everything else)
    app.get("*", function(req, res) {
        res.sendFile(path.join(__dirname, "../public/home.html"));
    });
};