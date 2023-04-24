const express = require("express");
const worldController = require("./../controller/worldController");
const authController = require("./../controller/authController");
const router = express.Router();
router
  .route("/:breed")
  .get(worldController.getBreed)
  .post(worldController.addBreed)
  .patch(worldController.incBreed);
router.route("/rank/:breed").get(worldController.getRank);
router
  .route("/rank/notdog/topdog")
  .get(authController.protect, worldController.topDog)
  .post(
    authController.protect,
    authController.restrictTo("admin"),
    worldController.fiveDog
  );
module.exports = router;
