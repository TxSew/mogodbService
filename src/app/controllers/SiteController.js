const Course = require("../models/Course");

const { multipleMongooseToObject } = require("../../util/mongoose");
class SiteController {
  //get /news
  index(req, res, next) {
    // res.json({
    //   name: "test",
    // });
    Course.find({})
      .then((courses) => {
        res.render("home", {
          courses: multipleMongooseToObject(courses),
        });
      })
      .catch(next);

    // res.render("home");
  }
  //get /news/:slug
  search(req, res) {
    res.render("search");
  }
  //get login
  login(req, res, next) {
    // if (req.isAuthenticated()) {
    //   next();
    // } else {
    //   res.redirect("/login");
    // }
    res.render("login");
  }
}

module.exports = new SiteController();
