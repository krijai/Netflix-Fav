const express = require("express");
const Router = express.Router;
const router = Router();

router.use("/login", require("./login"));
router.use("/signup", require("./signup"));
router.use("/user", require("./user"));
router.use("/movies", require("./movies"));

module.exports = router;