const router = require('express').Router();

//get all activities
router.get('/', async (req, res) => {
    try {
        console.log('get all activities');
    } catch (err) {
        res.status(500).json(err);
        console.log(err);
    }
});

//add activity 
router.post('/', async (req, res) => {
    try {
        console.log('post an activity');
    } catch (err) {
        res.status(500).json(err);
        console.log(err);
    }
});

//view one activity
router.get('/:id', async (req, res) => {
    try {
        const input = req.params.id;
        console.log('display specific activity' + input);
    } catch (err) {
        res.status(500).json(err);
        console.log(err)
    }
});


module.exports = router;