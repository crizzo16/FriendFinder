// Load Data
let data = require("../data/friends");

// Routing

module.exports = function (app) {
    app.get("/api/friends", function (req, res) {
        res.json(data);
    });

    app.post("/api/friends", function (req, res) {
        let check = true;
        for (let i=0; i<data.length; i++) {
            if ((data[i].name === req.body.name) && (data[i].picURL === req.body.picURL)) {
                check = false;
                break;
            }
        }

        if (check) {
            data.push(req.body);
            res.json(true);
        } else {
            res.json(false);
        }
    });

    app.post("/api/clear", function (req, res) {
        data.length = [];
        res.json({ ok: true });
    });
};




