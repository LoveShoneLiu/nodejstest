var express = require('express');
var router = express.Router();
var path = require('path');
var userModel = require('../modules/User.js');

router.post('/loginin', function(req, res, next) {
    // console.log('req.url', req.url);
    // console.log('req.baseUrl', req.baseUrl);
    // console.log('body', req.body);
    // console.log('req.params', req.params);
    // console.log('req.query', req.query);
    // console.log('req.method', req.method);
    userModel.find({userName: req.body.userName, password: req.body.password}, function(err, item) {
        if (err) return console.error(err);
        if (item && item.length) {

            // 设置session
            req.session.userInfo = {
                userName: req.body.userName,
                password: req.body.password
            }

            // 设置cookie
            res.cookie('userName', req.body.userName);
            res.json({
                success: 1,
                message: '登录成功',
                data: {

                }
            });
        } else {
            res.json({
                success: 0,
                status: 1000,
                message: '登录失败，请先注册',
                data: {

                }
            });
        }
    });
    // next();
});

router.post('/register', function(req, res, next) {
    userModel.find({userName: req.body.userName}, function(err, item) {
        if (err) return console.error(err);
        if (item && item.length) {
            req.session.destroy();
            res.clearCookie();
            res.json({
                success: 0,
                message: 'There are already users',
                data: {
                    name: 'test'
                }
            });
        } else {
            var newUser = new userModel({
                userName: req.body.userName,
                password: req.body.password
            });
            newUser.save(function(err) {
                if(err) console.error(err);

                // 设置session
                req.session.userInfo = {
                    userName: req.body.userName,
                    password: req.body.password
                }

                // 设置cookie
                res.cookie('userName', req.body.userName);
                res.json({
                    success: 1,
                    data: {
                        userName: req.body.userName
                    }
                });
            });
        }
    });
});

module.exports = router;