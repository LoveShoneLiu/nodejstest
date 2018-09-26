var express = require('express');
var router = express.Router();
var path = require('path');
var userModel = require('../modules/User.js');

router.get('/', function(req, res, next) {
    var userItem = new userModel({
        userName: 'test',
        passWord: '123456'
    });
    console.log('userItem', userItem);
    userModel.find({userName: userItem.userName}, function(err, item) {
        if (err) return console.error(err);
        console.log('item', item);
    });

    res.render('index', {isProduction: 'development'}); 
});

module.exports = router;