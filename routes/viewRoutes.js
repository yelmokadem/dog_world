const express = require("express");
const viewsController = require("../controller/viewsController");
const router = express.Router();

router.get("/", viewsController.getOverview);
//router.get("/breed", viewsController.getBreed);
router.get("/:breed", viewsController.getBreed);
module.exports = router;
