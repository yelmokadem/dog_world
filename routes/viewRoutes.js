const express = require("express");
const viewsController = require("../controller/viewsController");
const router = express.Router();

router.get("/", viewsController.getOverview);
router.get("/:breed", viewsController.getBreed);
router.get("/leaderboard/2", viewsController.getLeaderboard);
module.exports = router;
