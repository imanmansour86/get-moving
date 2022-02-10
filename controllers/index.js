const router = require('express').Router();

const usersRoutes = require('./users');
const activityRoutes = require('./activity');
const accountRoutes = require('./account');

router.use('/users', usersRoutes);
router.use('/activity', activityRoutes);
router.use('/', accountRoutes)

module.exports = router;