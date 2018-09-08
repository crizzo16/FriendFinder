// Load Data
let data = require("../data/friends");

// App functionality for API routes
module.exports = function (app) {
    // This one displays the JSON containing all people that have used the service
    app.get("/api/friends", function (req, res) {
        res.json(data);
    });

    // This posts the new friend to the data array from the survey
    app.post("/api/friends", function (req, res) {
        // Check to see if they're already in the data array (Check with name/picURL)
        let check = true;
        for (let i=0; i<data.length; i++) {
            if ((data[i].name === req.body.name) && (data[i].picURL === req.body.picURL)) {
                check = false;
                break;
            }
        }

        // If the new person isn't already in the array, add them to the array
        if (check) {
            data.push(req.body);
            res.json(true);
        } else { // Otherwise they can't re-add themselves
            res.json(false);
        }
    });

    // Clear the array
    app.post("/api/clear", function (req, res) {
        data.length = [];
        res.json({ ok: true });
    });
};




