var express = require("express");
var router = express.Router();
const siteController = require("../app/controllers/SiteController");
const middleware = require("../middleware/middleware");

router.get("/search", siteController.search);
router.get("/provider", middleware, siteController.provider);

router.get("/", siteController.index);

module.exports = router;
// app.get("/news", (req, res) => {
//   console.log(req.query);
//   res.render("news");
// });
