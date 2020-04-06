const express = require("express");
const router = express.Router();
const homeController = require("../controller/admin");

router.get("/",homeController.GET_HOME);

router.get("/courses",homeController.GET_COURSES);
router.get("/courses/new",homeController.GET_ADD_COURSE);
router.post("/courses",homeController.POST_ADD_COURSES);

router.get("/departments",homeController.GET_DEPARTMENT);
router.get("/departments/new",homeController.GET_ADD_DEPARTMENT);
router.post("/departments",homeController.POST_ADD_DEPARTMENT);

module.exports = router;