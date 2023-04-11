const express = require("express");
const worldController = require("./../controller/worldController");
const router = express.Router();
router
  .route("/:breed")
  .get(worldController.getBreed)
  .post(worldController.addBreed)
  .patch(worldController.incBreed);

module.exports = router;
