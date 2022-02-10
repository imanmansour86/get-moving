const router = require('express').Router();

router.get('/login', (res, req) => {
    if(req.session.logged_in) {
        console.log('logged in');
    }
    console.log('send to login page')
})


module.exports = router;