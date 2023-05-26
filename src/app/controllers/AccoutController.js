const {
  multipleMongooseToObject,
  mongooseToObject,
} = require("../../util/mongoose");
const Accouts = require("../models/Accout");
const jwt = require("jsonwebtoken");
const bcrypt = require("bcrypt");
const Accout = require("../models/Accout");
class AccoutController {
  register(req, res, next) {
    res.json("register");
  }
  login(req, res, next) {
    res.json("login");
  }
  logout(req, res, next) {
    // Route cho trang đăng xuất
    // Xóa thông tin phiên của người dùng và chuyển hướng đến trang đăng nhập
    req.session.destroy(() => {
      res.redirect("/");
    });
  }
  // STORE
  store(req, res, next) {
    const { username, password, email, name } = req.body;
    // Generate a salt for the password
    console.log(username)
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
          .then((data) => {
            res.status(200).json({
              message: 'thanh cong',
              data: data
            })
          })
          .catch(() => {
            res.redirect("/carts/register");
          });
      });
    });
  }
  //EDIT
  edit(req, res, next) {
    Accout.findById(req.params.id)
      .then((accounts) => accounts)
      .then((accounts) => {
        res.json(accounts);
      })
      .catch(next);
  }
  update(req, res, next) {
    Accout.updateOne({ _id: req.params.id }, req.body)
      .then(() => {
        res.json('data')
      })
      .catch(next);
  }
  delete(req, res, next) {
    Accouts.deleteOne({ _id: req.params.id })
      .then(() => {
        res.json("admin");
      })
      .catch(next);
  }

  //checkUser
  checkUser(req, res, next) {
    const { username, password } = req.body;
    console.log(username, password)
    Accouts.findOne({ username: username }, (err, user) => {
      if (err) {
        return res.status(500).json({ message: "Internal server error" });
      }
      if (!user) {
        return (req.data = "user not found");
      }
      bcrypt.compare(password, user.password, (err, result) => {
        if (err) {
          return res.status(500).json({ message: "Internal server error" });
        }
        if (result) {
          if (user.role == "admin") {
            req.session.admin = {
              username,
              role: "admin",
            };
            return res.status(200).json(req.session.admin);
          } else {
            req.session.user = {
              username,
              role: "user",
            };
            return res.status(200).json(req.session.user);
          }
        } else {
          return res.status(401).json({ message: "Invalid password" });
        }
      });
    });
  }
}
module.exports = new AccoutController();
