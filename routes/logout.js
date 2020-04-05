const express = require("express");
const router = express.Router();

const logoutController = require("../controller/logout")

router.get("/",logoutController.LOG_OUT);


module.exports = router