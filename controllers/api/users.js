const router = require('express').Router();

router.get('/:id', async(req, res) => {
    try{
        console.log('display single user')
    } catch (err) {
        res.status(500).json(err);
        console.log(err)
    }
});

router.get('/', async(req, res) => {
    try {
        console.log('display current user page')
    } catch (err) {
        res.status(500).json(err);
        console.log(err)
    }
});

module.exports = router;