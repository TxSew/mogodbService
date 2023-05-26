var express = require("express");
var router = express.Router();
const adminController = require("../app/controllers/AdminController");
const checkLogin = require("../middleware/checkLogin.js");
const checkAdmin = require("../middleware/checkAdmin.js");
const adminMiddleware = require("../middleware/checkAdminSession");
router.get("/" ,  adminController.index);
router.post("/store",  adminController.store);
module.exports = router;
