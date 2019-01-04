import express from 'express';
import path from 'path';
import ArticleModel from '../modules/Article.js';
import { port } from '../configs/configs.js';
const Mongoose = require('mongoose');
const { ObjectId } = Mongoose.Types;

export default ({
    router
}) => {

    // 感谢
    router.post('/thank', (req, res, next) => {
        let { userInfo = {} } = req.session;
        let { userName = '' } = userInfo;
        let user_Id = userInfo._id || '';
        let params = {
            _id: new ObjectId(req.body.topic_id),
        };

        // isThankBody 0:取消感谢 1：感谢，之所以用0和1，是因为true和false，传过来是字符串
        let isThankBody = req.body.isThank;
        ArticleModel.find(params).exec((err, items) => {
            if (err) {
                res.json({
                    statusCode: 1001,
                    message: 'fail'
                });
                next();
            }
            items.forEach((item, index) => {
                let isThanks = false;
                let thankItem = null;
                item.thanks.forEach((res, index) => {
                    if (res.user_Id == user_Id) {
                        isThanks = true;
                        thankItem = res;
                    }
                });

                // 点赞
                if (!isThanks && isThankBody == 1) {
                    item.thanks.push({
                        user_Id,
                        userName
                    });
                }

                // 取消点赞
                if (isThanks && isThankBody == 0 && !!thankItem) {
                    let index = item.thanks.indexOf(thankItem);
                    item.thanks.splice(index, 1);
                }

                item.save((err, result) => {
                    if(err) {
                        console.error(err);
                        res.json({
                            statusCode: 1001,
                            message: 'fail'
                        });
                        next();
                    }
                    res.json({
                        statusCode: 1000,
                        message: 'success',
                        data: {
                            userName: userName
                        }
                    });
                });
            });
        });
    });

    // 感谢
    router.post('/praise', (req, res, next) => {
        let { userInfo = {} } = req.session;
        let { userName = '' } = userInfo;
        let user_Id = userInfo._id || '';
        let params = {
            _id: new ObjectId(req.body.topic_id),
        };

        // isPraiseBody 0:取消感谢 1：感谢，之所以用0和1，是因为true和false，传过来是字符串
        let isPraiseBody = req.body.isPraise;
        ArticleModel.find(params).exec((err, items) => {
            if (err) {
                res.json({
                    statusCode: 1001,
                    message: 'fail'
                });
                next();
            }
            items.forEach((item, index) => {
                let isPraises = false;
                let praiseItem = null;
                item.praise.forEach((res, index) => {
                    if (res.user_Id == user_Id) {
                        isPraises = true;
                        praiseItem = res;
                    }
                });

                // 点赞
                if (!isPraises && isPraiseBody == 1) {
                    item.thanks.push({
                        user_Id,
                        userName
                    });
                }

                // 取消点赞
                if (isPraises && isPraiseBody == 0 && !!praiseItem) {
                    let index = item.praise.indexOf(thankItem);
                    item.praise.splice(index, 1);
                }

                item.save((err, result) => {
                    if(err) {
                        console.error(err);
                        res.json({
                            statusCode: 1001,
                            message: 'fail'
                        });
                        next();
                    }
                    res.json({
                        statusCode: 1000,
                        message: 'success',
                        data: {
                            userName: userName
                        }
                    });
                });
            });
        });
    });
}