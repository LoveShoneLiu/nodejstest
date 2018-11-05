const mongoose = require('mongoose');
const imagesSchemas = require('../schemas/images.js');
const Image = mongoose.model('Image', imagesSchemas);
export default Image;