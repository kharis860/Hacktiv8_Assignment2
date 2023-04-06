const express = require("express");
const router = express.Router();
const teachersRouter = require("./teacher.router");
const authRouter = require("./auth.router");
const auth = require("../middlewares/authentication");

router.use("/login", authRouter);
// impelemtasi autentikasi
router.use(auth);
router.use("/teachers", teachersRouter);
module.exports = router;
