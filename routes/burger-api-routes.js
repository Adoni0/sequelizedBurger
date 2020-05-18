var db = require("../models");

module.exports = function (app) {
    app.get("/", function (req, res) {
        db.burgers.findAll({}).then(function (data) {
            res.json(data);
        });
    });

    app.post("/api/burgers", function (req, res) {
        db.burgers.create(req.body).then(function (data) {
            res.json(data);
        });
    });

    app.put("/api/burgers/:id", function (req, res) {
        db.burgers.update(
            {devoured: true},
            {where: req.params.id}
        ).then(function (data) {
            res.json(data);
        });
    });


};

