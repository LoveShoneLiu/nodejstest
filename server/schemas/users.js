var mongoose = require('mongoose');
module.exports = new mongoose.Schema({
    userName: {
        type: String,
        required: true
    },
    passWord: {
        type: String,
        required: true
    }
});