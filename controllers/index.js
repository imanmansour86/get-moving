const router = require("express").Router();

const usersRoutes = require("./api/users");
const homeRoutes = require("./homeRoutes");
const api = require("./api/index");

router.use("/users", usersRoutes);
router.use("/api", api);
router.use("/", homeRoutes);

module.exports = router;
