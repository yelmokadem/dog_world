const express = require("express");
const router = express.Router();
const dogController = require("../controller/dogController");

router.get("/", dogController.getRandom);
router.get("/:breed", dogController.getBreed);

module.exports = router;
