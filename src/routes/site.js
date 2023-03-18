var express = require("express");
var router = express.Router();
const siteController = require("../app/controllers/SiteController");

router.get("/search", siteController.search);
router.get("/login", siteController.login);

router.get("/", siteController.index);

module.exports = router;
// app.get("/news", (req, res) => {
//   console.log(req.query);
//   res.render("news");
// });
