const router = require('express').Router();

const usersRoutes = require('./api/users');
const accountRoutes = require('./account');
const api = require('./api/index');

router.use('/users', usersRoutes);
router.use('/api', api);
router.use('/', accountRoutes)

module.exports = router;