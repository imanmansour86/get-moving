const router = require('express').Router();

//get all activities
router.get('/', async (req, res) => {
    try {

    } catch (err) {
        res.status(500).json(err);
        console.log(err)
    }
})

//add activity 
router.post('/', async (req, res) => {
    try {

    } catch (err) {
        res.status(500).json(err);
        console.log(err)
    }
})

//view one activity
router.get('/:id', async (req, res) => {
    try {
        const input = req.params.id;
    } catch (err) {
        res.status(500).json(err);
        console.log(err)
    }
})


module.exports = router;