const itemModel = require('../models/items');
const errors = require('../errors');

module.exports = {
    getAll: function(req, res, next) {
        let itemsList = [];
        itemModel.find({}, function(err, items){
            if (err){
                next(err);
            } else{
                for (let item of items) {
                    itemsList.push({id: item._id, name: item.description, content_url: item.content_url, created: item.created_at});
                }
                res.json({status: 200, message: "items list found!", data:{items: itemsList}});
            }
        })
    },
    create: function(req, res, next) {
        const itemData = { 
            user_id: req.body.user_id, 
            description: req.body.description,
            content_url: req.body.content_url,
            created_at: req.body.created_at
        };
        itemModel.create(itemData, function (err, result) {
            if(err){
                console.log('controllers.items.create_item.could_not_create_item', {
                    user_id: 'user_id',
                    description: 'description'
                })
                next(new errors.insertFailure(err.message, 'items_insert_fail', 'controllers.items.create'));
            } else {
                res.send({ status: 200, message: "creation item succed" });
            }
        })
    }
};