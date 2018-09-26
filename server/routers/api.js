var express = require('express');
var router = express.Router();
var path = require('path');

router.post('/loginin', function(req, res, next) {
    console.log('req.url', req.url);
    console.log('req.baseUrl', req.baseUrl);
    console.log('body', req.body);
    console.log('req.params', req.params);
    console.log('req.query', req.query);
    console.log('req.method', req.method);
    res.json({
        success: true,
        data: {
            name: 'test'
        }
    });
});

module.exports = router;