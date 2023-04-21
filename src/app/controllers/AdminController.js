const { multipleMongooseToObject } = require("../../util/mongoose");
const Accout = require("../models/Accout");
const Course = require("../models/Course");
const Feedback = require("../models/Feedback");

class AdminController {
  //get /news
  async index(req, res, next) {
    try {
      const products = await Course.find({});
      const account = await Accout.find({})
      const feedback = await Feedback.find({})
      const productCount = products.length;
      const accountCount = account.length;
      const feedbackCount = feedback.length;
       const checkAdmin = await Accout.find({role:"admin"}) != null
      res.render('admin', {
        products: multipleMongooseToObject(products),
        account: multipleMongooseToObject(account),
        feedbacks: multipleMongooseToObject(feedback),
        productCount,
        accountCount,
        feedbackCount,
         checkAdmin
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
