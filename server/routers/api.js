var express = require('express');
var router = express.Router();
var path = require('path');
var multer  = require('multer');
var userModel = require('../modules/User.js');
import { port } from '../configs/configs.js';

/**
 * multer用户图片保存
 * 通过 filename 属性定制
*/
console.log('afa;sdfasdffas', path.resolve(__dirname, '../../uploads/images'))
var storage = multer.diskStorage({
    destination: function (req, file, cb) {
        cb(null, path.resolve(__dirname, '../../uploads/images'));    // 保存的路径，备注：需要自己创建
    },
    filename: function (req, file, cb) {
        cb(null, (new Date()).getTime() + '-' + file.originalname);     // 将保存文件名设置为 字段名 + 时间戳，比如 logo-1478521468943
    }
});

// 通过 storage 选项来对 上传行为 进行定制化
var upload = multer({ storage: storage })

// 注册
router.post('/register', function(req, res, next) {
    /**
     *  params: statusCode
     *  1000:注册成功、1001：注册失败
     */
    userModel.find({userName: req.body.userName}, function(err, item) {
        if (err) return console.error(err);
        if (item && item.length) {
            
            // 清除session和cookie
            req.session.destroy();
            res.clearCookie('userName');
            res.clearCookie('connect.sid');

            res.json({
                statusCode: 1000,
                message: 'There are already users',
                data: {
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
                    statusCode: 1001,
                    data: {
                        userName: req.body.userName
                    }
                });
            });
        }
    });
});

// 登录
router.post('/loginin', function(req, res, next) {
    // console.log('req.url', req.url);
    // console.log('req.baseUrl', req.baseUrl);
    // console.log('body', req.body);
    // console.log('req.params', req.params);
    // console.log('req.query', req.query);
    // console.log('req.method', req.method);


    /**
     *  params: statusCode
     *  1000:登录成功、1001：未注册、1002：已注册，密码错误
     */
    userModel.find({userName: req.body.userName}, function(err, items) {
        if (err) return console.error(err);
        if (items && items.length) {
            items.forEach(function(val, index, array) {
                if (val.password == req.body.password) {

                    // 设置session
                    req.session.userInfo = {
                        userName: req.body.userName,
                        password: req.body.password
                    }

                    // 设置cookie
                    res.cookie('userName', req.body.userName);
                    res.json({
                        statusCode: 1000,
                        message: '登录成功',
                        data: {

                        }
                    });
                } else {
                                
                    // 清除session和cookie
                    req.session.destroy();
                    res.clearCookie('userName');
                    res.clearCookie('connect.sid');

                    res.json({
                        statusCode: 1002,
                        message: '密码错误',
                        data: {

                        }
                    });
                }
            });
        } else {
            
            // 清除session和cookie
            req.session.destroy();
            res.clearCookie('userName');
            res.clearCookie('connect.sid');

            res.json({
                statusCode: 1001,
                message: '登录失败，请先注册',
                data: {

                }
            });
        }
    });
    // next();
});

// 登出
router.post('/loginout', function(req, res, next) {
    console.log('req.session', req.session);

    // 清除session和cookie
    req.session.destroy();
    res.clearCookie('userName');
    res.clearCookie('connect.sid');

    /**
     *  params: statusCode
     *  1000:退出成功
     */
    res.json({
        statusCode: 1000,
        message: '退出成功',
        data: {}
    });
});

// 图片上传
router.post('/singleUploadImage', upload.single('file'), function (req, res, next) {
    /**
     * req.file 是 `avatar` 文件的信息
     * req.body 将具有文本域数据，如果存在的话
    */
    // debugger;
    if (!req.file) {
        res.json({
            statusCode: 1001,
            message: '上传失败，请选择图片',
            data: {
            }
        });
    } else {
        res.json({
            statusCode: 1000,
            message: '上传成功',
            data: {
                url: `${req.protocol}://${req.host}:${port}/images/${req.file.filename}`
            }
        });
    }
});

module.exports = router;