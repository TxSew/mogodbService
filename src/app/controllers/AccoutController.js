const { multipleMongooseToObject } = require("../../util/mongoose");
const Accouts = require("../models/Accout")
const jwt = require('jsonwebtoken')
 const bcrypt = require('bcrypt')
class AccoutController {
  register(req, res, next) {
    res.render('carts/register')
  }
  login(req, res, next) {
    res.render('carts/login')
  }
  // STORE

 store(req, res, next) {
    const { username, password, email, name } = req.body;
    // Generate a salt for the password
    bcrypt.genSalt(10, (err, salt) => {
      if (err) {
        console.log(err);
        return next(err);
      }
      // Hash the password with the generated salt
      bcrypt.hash(password, salt, (err, hash) => {
        if (err) {
          console.log(err);
          return next(err);
        }
        // Create a new account with the hashed password
        const account = new Accouts({
          name,
          username,
          password: hash, // store the hashed password
          email,
        });
        account
          .save()
          .then(() => {
            res.redirect("/carts/login");
          })
          .catch(() => {
            res.json("user is require unique db");
          });
      });
    });
  }
  //checkUser
  checkUser(req, res, next) {
    const { username, password } = req.body;
    Accouts.findOne({ username: username }, (err, user) => {
      if (err) {
        return res.status(500).json({ message: "Internal server error" });
      }
      if (!user) {
        return res.status(404).json({ message: "User not found" });
      }
      bcrypt.compare(password, user.password, (err, result) => {
        if (err) {
          return res.status(500).json({ message: "Internal server error" });
        }
        if (result) {
          if(user.role == 'admin'){
          return res.redirect('/admin')
          }
           else {
          return res.redirect('/')
          }
        } else {
          return res.status(401).json({ message: "Invalid password" });
        }
      });
    })
   }

}
module.exports = new AccoutController()

