var mongoose = require('mongoose');
var usersSchemas = require('../schemas/users.js');
var User = mongoose.model('User', usersSchemas);
module.exports = User;