const router = require('express').Router();
const controller = require('../controllers/items');

router.get('/', function(req, res){
    res.send({status: 200, items: [12,23,42]});
})

module.exports = router;