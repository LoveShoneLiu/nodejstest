import express from 'express';
import path from 'path';
import ArticleModel from '../modules/Article.js';
import { port } from '../configs/configs.js';

export default ({
    router
}) => {
    router.post('/article', function(req, res, next) {
        console.log('req.body', req.body);
        let newArticle = new ArticleModel({
            title: req.body.title,
            abstract: req.body.abstract,
            author: req.body.author,
            articleBody: req.body.articleBody
        });
        newArticle.save((err) => {
            if(err) return console.error(err);
            res.json({
                statusCode: 1000,
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
        ArticleModel.find().skip(page - 1).limit(Number(count)).exec(function(err, item) {
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
};