var express = require("express");
var router = express.Router();
const AccoutController = require("../app/controllers/AccoutController");

router.get("/login", AccoutController.login);
router.get("/register", AccoutController.register);
router.get("/logout", AccoutController.logout);
router.post("/store", AccoutController.store);
router.post("/checkUser", AccoutController.checkUser);
router.get("/:id/edit", AccoutController.edit);
router.put("/:id", AccoutController.update);
router.post("/:id/delete", AccoutController.delete);
module.exports = router;
