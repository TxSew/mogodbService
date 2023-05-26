const Course = require("../models/Course");

const { mongooseToObject } = require("../../util/mongoose");
class CourseController {
  //get //courses/:slug
  show(req, res, next) {
    Course.findOne({ slug: req.params.slug })
      .then((course) => {
        res.json(course)
      })
      .catch(next);
  }
  // GET
  create(req, res, next) {
    res.render("courses/create");
  }
  //POST
  store(req, res, next) {
    const course = new Course(req.body);
    course
      .save()
      .then((data) => {
        if (data) {
          return res.status(200).json(data)
        }
        else {
          return res.status(302).json('not found')
        }
      })
      .catch((error) => {
        return res.status(403).json(error)
      });
  }
  
  edit(req, res, next) {
    Course.findOne({ _id: req.params.id })
      .then((course) =>
        res.json(course)
      )
      .catch(next);
    // res.render("courses/edit");
  }
  // PUT /courses/:id
  update(req, res, next) {
    Course.updateOne({ _id: req.params.id }, req.body)
      .then((data) => {
        if (data) {
          res.status(200).json('update success')
        }
        else {
          res.status(403).json('not found value')
        }
      })
      .catch((err) => {
        res.status(500).json({
          message: 'server error'
        })
      })
      .catch(next);
  }
  //[DELETE] /courses/:id
  delete(req, res, next) {
    Course.deleteOne({ _id: req.params.id })
      .then(() => {
        res.redirect('/')
      })
      .catch(next);
  }
}

module.exports = new CourseController();
