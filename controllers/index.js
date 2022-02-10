const router = require('express').Router();

const usersRoutes = require('./users');
const activityRoutes = require('./activity');

router.use('/users', usersRoutes);
router.use('/activity', activityRoutes);

module.exports = router