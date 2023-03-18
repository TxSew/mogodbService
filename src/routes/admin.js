var express = require("express");
var router = express.Router();
const adminController = require("../app/controllers/AdminController");

// router.get("/:slug", adminController.show);

router.get("/", adminController.index);

module.exports = router;
// app.get("/news", (req, res) => {
//   console.log(req.query);
//   res.render("news");
// });
