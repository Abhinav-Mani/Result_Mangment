const express = require("express");
const router = express.Router();

const teacherController = require("../controller/teacher");

router.get("/",teacherController.GET_HOME);


module.exports = router