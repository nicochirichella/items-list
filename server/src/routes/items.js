const router = require('express').Router();
const itemsController = require('../controllers/items');

router.get('/',
    itemsController.getAll
);

router.post('/create', 
    itemsController.create
);

module.exports = router;