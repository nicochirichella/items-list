const router = require('express').Router();
const itemsController = require('../controllers/items');
const jsonSchemaValidator = require('../middlewares/jsonSchemaValidator');

router.get('/',
    itemsController.getAll
);

router.post('/create', 
    jsonSchemaValidator.validateFor('itemSchema.json'),
    itemsController.create
);

router.post('/del',
    itemsController.delete
);

module.exports = router;