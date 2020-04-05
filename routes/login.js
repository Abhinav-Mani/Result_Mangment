const express = require("express");
const router = express.Router();
const loginController = require("../controller/login");

router.get("/",loginController.GET_STUDENT_LOGIN);
router.get("/teacher",loginController.GET_TEACHER_LOGIN);
router.get("/admin",loginController.GET_ADMIN_LOGIN);

router.post("/",loginController.POST_STUDENT_LOGIN);
router.post("/teacher",loginController.POST_TEACHER_LOGIN);
router.post("/admin",loginController.POST_ADMIN_LOGIN);

module.exports = router;