var express = require("express");
const FeedbackController = require("../app/controllers/FeedbackController");
var router = express.Router();

router.post("/:id/delete", FeedbackController.delete);
module.exports = router;
