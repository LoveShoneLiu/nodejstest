import express from 'express';
import path from 'path';
import ArticleModel from '../modules/Article.js';
import { port } from '../configs/configs.js';
const Mongoose = require('mongoose');
const { ObjectId } = Mongoose.Types;

export default ({
    router
}) => {
    router.post('/article', function(req, res, next) {
        let newArticle = new ArticleModel({
            title: req.body.title,
            abstract: req.body.abstract,
            author: req.body.author,
            articleBody: req.body.articleBody,
            label: req.body.label
        });
        newArticle.save((err) => {
            if(err) {
                console.error(err);
                res.json({
                    statusCode: 1001,
                    message: 'fail',
                    data: {
                        userName: req.body.userName
                    }
                });
                next();
            }
            res.json({
                statusCode: 1000,
                message: 'success',
                data: {
                    userName: req.body.userName
                }
            });
        });
        // next();
    });
    router.post('/getArticle', function(req, res, next) {
        let page = req.body.page || 1;
        let count = req.body.count || 10;
        let label = req.body.label || '';
        let params = label ? {label: label} : {};
        ArticleModel.find(params).skip(page - 1).limit(Number(count)).exec(function(err, item) {
            if (err) {
                res.json({
                    statusCode: 1001,
                    message: 'err',
                    data: err
                });
                return;
            }
            res.json({
                statusCode: 1000,
                message: 'success',
                data: item
            });
        });
    });

    // 获取单个文章
    router.post('/getOneArticle', function(req, res, next) {
        let _id = req.body._id || '';
        ArticleModel.find({_id: new ObjectId(_id)}, function(err, item) {
            if (err) {
                res.json({
                    statusCode: 1001,
                    message: 'fail'
                });
                return console.error(err);
            }
            res.json({
                statusCode: 1000,
                message: 'success',
                data: item && item[0]
            });
        })
    });
};