const jwt = require('jsonwebtoken')
const Course = require("../models/Course");

const { multipleMongooseToObject } = require("../../util/mongoose");
const Feedback = require('../models/Feedback');
class SiteController {
  //get /news
  index(req, res, next) {
    console.log(req.session.user)
    Course.find({})
      .then((courses) => {
        res.render("home", {
          courses: multipleMongooseToObject(courses),
          role: req.session.user
        });
      })
      .catch(next);
  }
  //get /news/:slug
  search(req, res) {
    res.render("search");
  }

  async feedbackView(req, res, next) {
    try {
      const products = await Course.find({});
      const account = await Accout.find({})
      const feedbacks = await Feedback.find({})
      const productCount = products.length;
      const accountCount = account.length;
      const feedbackCount = feedback.length;
      res.render('feedback', {
        feedbacks: multipleMongooseToObject(feedbacks),
        productCount,
        accountCount,
        feedbackCount
      });
    } catch (err) {
      next()
    }

  }

  feedback(req, res, next) {
    const feedback = new Feedback(req.body)
    feedback
      .save()
      .then((db) => {
        res.json('feedback sucssesfully')
      })
      .catch((err) => {
        res.json('err feedback')
      })
  }
}

module.exports = new SiteController();
