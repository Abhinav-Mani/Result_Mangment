const express = require("express");
const router = express.Router();

const teacherController = require("../controller/teacher");

router.get("/",teacherController.GET_HOME);
router.get("/:code",teacherController.GET_STUDENT_MARKS_ENTRY);


module.exports = router