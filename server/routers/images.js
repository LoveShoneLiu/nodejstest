import imageModel from '../modules/Image.js';

export default ({
    router
}) => {
    router.post('/getImages', (req, res, next) => {
        let page = req.body.page || 1;
        let count = req.body.count || 10;
        imageModel.find().skip(page - 1).limit(count).exec(function(err, item) {
            // console.log('err', err);
            // console.log('item', item);
            res.json({
                statusCode: 1000,
                message: 'success',
                data: item
            });
        });
    });
}