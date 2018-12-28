import express from 'express';
import path from 'path';
import multer from 'multer';
let router = express.Router();
import userModel from '../modules/User.js';
import imageModel from '../modules/Image.js';
import { port } from '../configs/configs.js';
import userRegister from './user.js';
import uploadRegister from './upload.js';
import imagesRegister from './images.js';
import articleRegister from './articles.js';

// 用户注册、登录、登出
userRegister({
    router: router
});

// 上传文件
uploadRegister({
    router: router
});

// 图片
imagesRegister({
    router: router
});

// 文章
articleRegister({
    router: router
});
export default router;