const router = require("express").Router();
const userRoutes = require('./userRoutes');
const activityRoutes = require('./activityRoutes');

router.use('/users', userRoutes);
router.use('/projects', activityRoutes)
module.exports = router;
