const { multipleMongooseToObject } = require("../../util/mongoose");
const Course = require("../models/Course");

class AdminController {
  //get /news
  index(req, res, next) {
    Course.find({})
      .then((courses) =>
        res.render("admin", {
          courses: multipleMongooseToObject(courses),
        })
      )
      .catch(next);
  }
  //store
  store(req, res, next) {
    Course.find({
      $or: [
        { name: req.body.q },
        { category: req.body.q },
        { slug: req.body.q },
      ]
    })
      .then((courses) =>
        res.render("admin", {
          courses: multipleMongooseToObject(courses),
        })
      )
      .catch(next);

  }
}

module.exports = new AdminController();
