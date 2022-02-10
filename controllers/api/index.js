const router = require('express').Router();

const activityRoutes = require('./account');

router.use('/activity', activityRoutes);

module.exports = router;