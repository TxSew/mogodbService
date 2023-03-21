const jwt = require('jsonwebtoken')
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
  middleware(req, res, next) {
    const token = req.params.token
    const ketqua = jwt.verify(token, 'mk')
    try {
      if (ketqua) {
        next()
      }
    }
    catch (err) {
      return res.json('loi server')
    }
  }
  //get login
  provider(req, res, next) {
    res.json('hhone')
  }
}

module.exports = new SiteController();
