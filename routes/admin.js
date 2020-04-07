const express = require("express");
const router = express.Router();
const adminController = require("../controller/admin");

router.get("/",adminController.GET_HOME);

router.get("/courses",adminController.GET_COURSES);
router.get("/courses/new",adminController.GET_ADD_COURSE);
router.post("/courses",adminController.POST_ADD_COURSES);

router.get("/departments",adminController.GET_DEPARTMENT);
router.get("/departments/new",adminController.GET_ADD_DEPARTMENT);
router.post("/departments",adminController.POST_ADD_DEPARTMENT);

router.get("/teachers",adminController.GET_TEACHERS);
router.get("/teachers/new",adminController.GET_ADD_TEACHER);
router.post("/teachers",adminController.POST_ADD_TEACHER);

router.get("/student",adminController.GET_STUDENTS_DEPARMENT);
router.get("/student/:code",adminController.GET_STUDENTS);
router.get("/student/:code/new",adminController.GET_ADD_STUDENTS);

module.exports = router;