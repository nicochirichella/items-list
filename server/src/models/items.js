const mongoose = require('mongoose');
const Schema = mongoose.Schema;
const ItemsSchema = new Schema({
    user_id: {
        type: String,
        trim: true,
        required: true,
    },
    description: {
        type: String,
        trim: true,
        required: true,
    },
    content_url: {
        type: String,
        trim: true,
        required: true,
    },
    created_at: {
        type: Date,
        trim: true,
        required: true,
        default: Date.now
    }
});
module.exports = mongoose.model('Items', ItemsSchema)