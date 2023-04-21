var express = require("express");
var router = express.Router();

const courseController = require("../app/controllers/CourseController");
const upload = require("../util/upload");

router.get("/create", courseController.create);
router.post("/store", upload.single(('file')), courseController.store);
router.get("/:id/edit", courseController.edit);
router.put("/:id", courseController.update);
router.post("/:id/delete", courseController.delete);

module.exports = router;
