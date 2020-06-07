const itemModel = require('../models/items');

module.exports = {
    getAll: function(req, res) {
        let itemsList = [];
        itemModel.find({}, function(err, items){
            if (err){
                next(err);
            } else{
                for (let item of items) {
                    itemsList.push({id: item._id, name: item.description});
                }
                res.json({status: 200, message: "items list found!", data:{items: itemsList}});
            }
        });
    },
    create: function(req, res) {
        itemModel.create({ user_id: '1', description: 'item description', content_url: 'url' }, function (err, result) {
            if(err){
                console.log('controllers.items.create_item.could_not_create_item', {
                    user_id: 'user_id',
                    description: 'description'
                });
                res.send({ status: 404, message: "There was a sistem error", data: err });
            } else {
                res.send({ status: 200, message: "creation item succed" });
            }
        });
    }
};