var express = require('express');
var url = require('url');
var ejs = require('ejs');
var path = require('path');
var fs = require('fs');
var bodyParser = require('body-parser');
var cookieParser = require('cookie-parser');
var session = require('express-session');
var FileStore = require('session-file-store')(session);
var mongoose = require('mongoose');

// 创建app应用
var app = express();

// 使用 cookieParser 中间件，cookieParser(secret, options)
// 其中 secret 用来加密 cookie 字符串（下面会提到 signedCookies）
// options 传入上面介绍的 cookie 可选参数
app.use(cookieParser());

// parse application/x-www-form-urlencoded
app.use(bodyParser.urlencoded({ extended: true }))
 
// parse application/json
app.use(bodyParser.json())

//注册ejs模板为html页。简单的讲，就是原来以.ejs为后缀的模板页，现在的后缀名可以//是.html了
app.engine('.html', ejs.__express);

// 设置模板文件存放的目录，第一个参数必须是views，第二个参数是目录
app.set('views', path.resolve(__dirname, './fe'));

//设置视图模板的默认后缀名为.html,避免了每次res.Render("xx.html")的尴尬
app.set('view engine', 'html');

// 数据库连接成功启动http服务
mongoose.connect('mongodb://localhost:27017/runoob', function(err) {
    if (err) {
        console.log('数据库连接失败');
    } else {
        console.log('数据库连接成功');
        app.listen(4000, function() {
            console.log('端口', 4000);
        });
    }
});

// 在开发过程中，需要取消模板缓存
// ejs.setDefaults({cache: false});

// 设置静态文件托管
app.use('/dist', express.static(path.resolve(__dirname, './fe/dist')));

// app.get('/', function (req, res, next) {
//     console.log(11111111111111);
//     // var pathname = url.parse(req.url).pathname;
//     // var realPath = path.join(__dirname, '../fe/', pathname);
//     // console.log('pathname', pathname);
//     // console.log('realPath', realPath);
//     // fs.exists(realPath, function (exists) {
//     //     console.log('exists', exists);
//     //     if (!exists) {
//     //         res.writeHead(404, {
//     //             'Content-Type': 'text/plain'
//     //         });

//     //         res.write("This request URL " + realPath + " was not found on this server.");
//     //         res.end();
//     //     } else {
//     //         fs.readFile(realPath, 'utf-8', function (err, file) {
//     //             console.log('err', err);
//     //             console.log('file', file);
//     //             if (err) {
//     //                 res.writeHead(500, {
//     //                     'Content-Type': 'text/plain'
//     //                 });

//     //                 res.end(err);
//     //             } else {
//     //                 res.writeHead(200, {
//     //                     'Content-Type': 'text/html'
//     //                 });

//     //                 res.write(file, "binary");

//     //                 res.end();
//     //             }
//     //         });
//     //     }
//     // });
//     res.render('index', {isProduction: 'development'}); 
//     next();
// });

// console.log('__dirname', __dirname);
// console.log('dir', path.resolve(__dirname, '../fe/dist/js'));
// app.use(express.static(path.resolve(__dirname, '../fe/dist/js')));

// app.use(session({
//     // 假如你不想使用 redis 而想要使用 memcached 的话，代码改动也不会超过 5 行。
//     // 这些 store 都遵循着统一的接口，凡是实现了那些接口的库，都可以作为 session 的 store 使用，比如都需要实现 .get(keyString) 和 .set(keyString, value) 方法。
//     // 编写自己的 store 也很简单
//     store: new redisStore(),
//     secret: 'somesecrettoken'
// }));

// 按照上面的解释，设置 session 的可选参数
app.use(session({
    resave: false,  //重新保存
    saveUninitialized: true,
    // store: new FileStore(),  // 本地存储session（文本文件，也可以选择其他store，比如redis的）
    secret: 'recommand 128 bytes random string', // 建议使用 128 个字符的随机字符串
    cookie: { maxAge: 1000 * 60 * 60 * 24 }
}));

// app.use('/admin', require('./routers/admin.js'));
app.use('/api', require('./routers/api.js'));
app.use('/', require('./routers/main.js'));
