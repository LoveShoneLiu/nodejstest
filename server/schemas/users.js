var mongoose = require('mongoose');
var Schema = mongoose.Schema;
module.exports = new mongoose.Schema({
    userName: {
        type: String,
        required: true
    },
    password: {
        type: String,
        required: true
    },
    images: {
        type: Schema.Types.ObjectId,
        ref: 'images'
    }
});