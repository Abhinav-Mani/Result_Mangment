const express = require("express");
const router = express.Router();
const homeController = require("../controller/home");

router.get("/",homeController.GET_HOME);

module.exports = router;