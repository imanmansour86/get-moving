const router = require("express").Router();
const userRoutes = require("./userRoutes");
const activityRoutes = require("./activityRoutes");

router.use("/users", userRoutes);
router.use("/activity", activityRoutes);
module.exports = router;
