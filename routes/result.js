const express = require("express");
const router = express.Router();

const resultController = require("../controller/result");

router.get("/",resultController.RESULT);

module.exports = router;