const { multipleMongooseToObject } = require("../../util/mongoose");
const Accouts = require("../models/Accout")
const jwt = require('jsonwebtoken')
class AccoutController {
  register(req, res, next) {
    res.render('carts/register')
  }

  login(req, res, next) {
    res.render('carts/login')
  }
  // STORE
  store(req, res, next) {
    const accout = new Accouts(req.body);
    accout
      .save()
      .then(() => {
        res.send('accout success')
      })
      .catch(next);
  }

  checkUser(req, res, next) {
    const username = req.body.username
    const password = req.body.password
    Accouts.findOne({
      username: username,
      password: password
    })
      .then((data) => {
        if (data) {
          const token = jwt.sign({
            _id: data._id
          }, 'mk')
          res.json({
            message: 'success',
            token: token
          })
          res.redirect('/')
        }
        else {
          return res.json('that bai')
        }
      })
      .catch(next)
  }
}
module.exports = new AccoutController()
