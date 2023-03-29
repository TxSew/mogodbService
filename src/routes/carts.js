var express = require("express");
var router = express.Router();
const AccoutController = require("../app/controllers/AccoutController");
router.get("/register", AccoutController.register);
router.get("/login", AccoutController.login);
router.post("/store", AccoutController.store);
router.post("/checkUser", AccoutController.checkUser);
module.exports = router;
