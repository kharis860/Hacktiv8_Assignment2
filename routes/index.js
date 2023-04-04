const express = require("express");
const router = express.Router();
const teachersRouter = require("./teacher.router");
const authRouter = require("./auth.router");

router.use("/teachers", teachersRouter);
router.use("/login", authRouter);
module.exports = router;
