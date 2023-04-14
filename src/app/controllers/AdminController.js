const { multipleMongooseToObject } = require("../../util/mongoose");
const Accout = require("../models/Accout");
const Course = require("../models/Course");

class AdminController {
  //get /news
  async index(req, res, next) {
    try {
      const products = await Course.find({});
      const account = await Accout.find({})
      const productCount = products.length;
      const accountCount = account.length;
      res.render('admin', {
        products: multipleMongooseToObject(products),
        productCount,
        accountCount
      });
    } catch (err) {
      next()
    }
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
