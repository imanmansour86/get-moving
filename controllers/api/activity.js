const router = require('express').Router();
const { Activity } = require('../../models')

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
        const newActivity = await Activity.create({
            ...req.body,
            user_id: req.session.user_id
        });
        res.status(200).json(newActivity);
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