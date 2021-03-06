var db = require("../models");

module.exports = function (app) {
  app.get("/", function (req, res) {
    db.Burgers.findAll({}).then(function (data) {
      var result = JSON.stringify(data);
      res.render("index", { burger: JSON.parse(result) });
      // console.log(data);
      // data = JSON.stringify(data)
      // console.log(data);
    });
  });

  app.post("/api/burgers", function (req, res) {
    db.Burgers.create({
      burger_name: req.body.burger_name,
      devoured: false,
    }).then(function (data) {
      // res.json(data);
      //res.json(data.toString());
      console.log(data);
      res.redirect("/");
    });
  });

  app.put("/api/burgers/:id", function (req, res) {
    console.log(req.params.id);
    db.Burgers.update(
      { devoured: true },
      {
        where: {
          id: req.params.id,
        },
      }
    ).then(function (data) {
      // res.json(data);
      res.sendStatus(200);
    });
  });
};
