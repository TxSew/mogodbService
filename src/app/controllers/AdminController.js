const { multipleMongooseToObject } = require("../../util/mongoose");
const Course = require("../models/Course");

class AdminController {
  //get /news
  index(req, res, next) {
    console.log(req.data)
    Course.find({})
      .then((courses) =>
        res.render("admin", {
          courses: multipleMongooseToObject(courses),
        })
      )
      .catch(next);
  }
  //get /news/:slug
  // show(req, res) {
  //   res.send("NEW DETAIL");
  // }
}

module.exports = new AdminController();
