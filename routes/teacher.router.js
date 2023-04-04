const express = require("express");
const router = express.Router();
const { getAllTeacher } = require("../controller/teacher.controller");

router.get("/", getAllTeacher);

module.exports = router;
