var db = require("../models");

var path = require("path")

module.exports = function(app) {
  // Load index page
  app.get("/home", function(req, res) {
    // db.Example.findAll({}).then(function(dbExamples) {
    //   res.render("index", {
    //     msg: "Welcome!",
    //     examples: dbExamples
    //   });
    // });

    //below: keep for html home page path
    res.sendFile(path.join(__dirname, "../public/html/home.html"));

  });

  //view status page
  app.get("/status", function(req, res) {
    // db.Example.findAll({}).then(function(dbExamples) {
    //   res.render("index", {
    //     msg: "Welcome!",
    //     examples: dbExamples
    //   });
    // });

    //below: keep for html home page path
    res.sendFile(path.join(__dirname, "../public/html/status.html"));

  });
  app.get("/post", function(req, res) {
    // db.Example.findAll({}).then(function(dbExamples) {
    //   res.render("index", {
    //     msg: "Welcome!",
    //     examples: dbExamples
    //   });
    // });

    //below: keep for html home page path
    res.sendFile(path.join(__dirname, "../public/html/post.html"));

  });

  //view services page
  app.get("/services", function(req, res) {
    // db.Example.findAll({}).then(function(dbExamples) {
    //   res.render("index", {
    //     msg: "Welcome!",
    //     examples: dbExamples
    //   });
    // });

    //below: keep for html home page path
    res.sendFile(path.join(__dirname, "../public/html/services.html"));

  });

  //view about  page
  app.get("/about", function(req, res) {
    // db.Example.findAll({}).then(function(dbExamples) {
    //   res.render("index", {
    //     msg: "Welcome!",
    //     examples: dbExamples
    //   });
    // });

    //below: keep for html home page path
    res.sendFile(path.join(__dirname, "../public/html/about.html"));

  });

  //view booking page
  app.get("/book", function(req, res) {
    // db.Example.findAll({}).then(function(dbExamples) {
    //   res.render("index", {
    //     msg: "Welcome!",
    //     examples: dbExamples
    //   });
    // });

    //below: keep for html home page path
    res.sendFile(path.join(__dirname, "../public/html/book.html"));

  });

  // Load example page and pass in an example by id
  // app.get("/example/:id", function(req, res) {
  //   db.Example.findOne({ where: { id: req.params.id } }).then(function(dbExample) {
  //     res.render("example", {
  //       example: dbExample
  //     });
  //   });
  // });

  // Render 404 page for any unmatched routes
  app.get("*", function(req, res) {
    res.render("404");
  });
};
