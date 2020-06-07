const router = require('express').Router();
const itemsController = require('../controllers/items');

router.get('/', async function(req, res){
    itemsController.getAll(req,res);
});

router.get('/create', async function(req, res) {
    itemsController.create(req, res);
});

module.exports = router;