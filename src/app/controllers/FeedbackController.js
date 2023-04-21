const Course = require("../models/Course");
const Feedback = require("../models/Feedback");
class FeedbackController {

  edit(req, res, next) {
    Course.findById(req.params.id)
      .then((course) =>
        res.render("courses/edit", { course: mongooseToObject(course) })
      )
      .catch(next);
    // res.render("courses/edit");
  }
  // PUT /courses/:id
  update(req, res, next) {
    Course.updateOne({ _id: req.params.id }, req.body)
      .then(() => {
        res.redirect("/admin");
      })
      .catch(next);
  }
  //[DELETE] /courses/:id
  delete(req, res, next) {
    Feedback.deleteOne({ _id: req.params.id })
      .then(() => {
        res.redirect("/admin");
      })
      .catch(next);
  }
}

module.exports = new FeedbackController();
