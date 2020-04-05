const express = require("express");
const router = express.Router();
const homeController = require("../controller/admin");

router.get("/",homeController.GET_HOME);
router.get("/courses",homeController.GET_COURSES);

module.exports = router;