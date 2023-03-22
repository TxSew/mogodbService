var express = require("express");
var router = express.Router();
const adminController = require("../app/controllers/AdminController");
const middleware = require("../middleware/middleware");
const checkAdmin = require("../middleware/checkAdmin");
// router.get("/:slug", adminController.show);
router.get("/", middleware, adminController.index);
module.exports = router;
