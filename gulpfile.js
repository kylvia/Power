var gulp = require('gulp'),
    plugins = require("gulp-load-plugins")({
        pattern: '*' //让gulp-load-plugins插件能匹配除了gulp插件之外的其他插件
    }),

    merge = require('merge-stream'),
    path = {
        html: 'html/**/*.html',
        htmlDir: 'dest',
        css: 'css/*.css',
        cssDir: 'dest/css',
        less: 'less/**/*.less',
        js: ['js/**/*.js', '!js/**/*.min.js', 'js/**/*.min.js', 'js/**/*.json', 'js/**/*'],
        jsDir: 'dest/js',
        images: 'images/**/*.+(jpg|png|gif|svg)',
        imagesDir: 'dest/images',
        MockData: './dataJs/*'
    },
    middleware = [];


// 第三方插件管理
gulp.task('vendor', function () {
    return merge(
        gulp.src('node_modules/jquery/dist/*.*')
            .pipe(gulp.dest('dest/js/vendor/jquery')),
        gulp.src('node_modules/bootstrap/dist/**/*')
            .pipe(gulp.dest('dest/js/vendor/bootstrap')),
        gulp.src('node_modules/bootstrap-table/src/*.*')
            .pipe(gulp.dest('dest/js/vendor/bootstrap-table'))
    );
});
//压缩css,压缩后的文件放入dest/css
gulp.task('minifycss', function () {
    return gulp.src(path.css)
        // .pipe(plugins.cssmin()) //压缩
        .pipe(gulp.dest(path.cssDir));//输出
});

//合并并压缩css，合并压缩后的文件放入dest/css
gulp.task('concatminifycss', function () {
    return gulp.src(path.css)
        .pipe(plugins.concat('main.css'))    //合并所有css到main.css
        //.pipe(gulp.dest(path.cssDir))    //输出main.css到文件夹
        //.pipe(plugins.rename({suffix: '.min'}))   //rename压缩后的文件名
        .pipe(plugins.cssmin())//压缩
        .pipe(gulp.dest(path.cssDir));//输出
});

//压缩js，压缩后的文件放入dest/js
gulp.task('minifyjs', function () {
    return gulp.src(path.js.slice(0, 1))
        // .pipe(plugins.uglify())//压缩
        .pipe(gulp.dest(path.jsDir));//输出
});

//合并并压缩js，合并压缩后的文件放入dest/js
gulp.task('concatminifyjs', function () {
    return gulp.src(path.js.slice(0, 1))
        .pipe(plugins.concat('main.js'))    //合并所有js到main.js
        .pipe(gulp.dest(path.jsDir))    //输出main.js到文件夹
        .pipe(plugins.rename({suffix: '.min'}))   //rename压缩后的文件名
        .pipe(plugins.uglify())//压缩
        .pipe(gulp.dest(path.jsDir));//输出
});
gulp.task('unscripts', function () {
    return gulp.src(path.js.slice(2))
        .pipe(gulp.dest(path.jsDir));
});
//合并并压缩html，合并压缩后的文件放入dest/
gulp.task('html', function () {
    gulp.src(path.html)
        .pipe(plugins.replace('__VERSION', Date.now().toString(16)))
        .pipe(plugins.htmlmin({
            removeComments: true,//清除HTML注释
            collapseWhitespace: true,//压缩HTML
            collapseBooleanAttributes: true,//省略布尔属性的值 <input checked="true"/> ==> <input />
            removeEmptyAttributes: true,//删除所有空格作属性值 <input id="" /> ==> <input />
            removeScriptTypeAttributes: true,//删除<script>的type="text/javascript"
            removeStyleLinkTypeAttributes: true,//删除<style>和<link>的type="text/css"
            minifyJS: true,//压缩页面JS
            minifyCSS: true//压缩页面CSS
        }))
        .pipe(gulp.dest(path.htmlDir))
        .pipe(plugins.browserSync.stream());
});
//压缩图片，压缩后的文件放入dest/images
gulp.task('image', function () {
    gulp.src(path.images)
        .pipe(plugins.imagemin({
            optimizationLevel: 5, //类型：Number  默认：3  取值范围：0-7（优化等级）
            progressive: true, //类型：Boolean 默认：false 无损压缩jpg图片
            interlaced: true, //类型：Boolean 默认：false 隔行扫描gif进行渲染
            multipass: true //类型：Boolean 默认：false 多次优化svg直到完全优化
        }))
        .pipe(gulp.dest(path.imagesDir));//输出
});

//执行压缩前，先删除dest文件夹里的内容
gulp.task('clean', function (cb) {
    plugins.del(['dest/*'], cb)
});

//编译less到css
gulp.task("less", function () {
    gulp.src(path.less)
        .pipe(plugins.less())
        .pipe(gulp.dest(path.cssDir));

});
//监视文件的变化
gulp.task("watch", function () {
    gulp.watch(path.less, ['less']);
    gulp.watch(path.css, ['minifycss']);
    gulp.watch(path.html, ['html']);
    gulp.watch(path.images, ['image']);
    gulp.watch(path.js[4], ['unscripts', 'minifyjs']);
});
gulp.task("build", ["clean"], function (cb) {
    plugins.runSequence(['minifycss', 'image', 'less', 'vendor', 'minifyjs', 'unscripts', 'html', "watch"], cb);
});
//同步刷新
gulp.task("serve", ["build"], function () {
    var path = require('path');
    var url = require('url');
    var fs = require('fs');
    var uuid = require('uuid');
    var Mock = require('mockjs');
    middleware=function (req, res, next) {
        var urlObj = url.parse(req.url, true),
            method = req.method,
            paramObj = urlObj.query,
            mockUrl,
            newSearch = '';

        if (urlObj.pathname.match(/\..+$/) || urlObj.pathname.match(/\/$/)) {
            next();
            return;
        }
        console.log('[requist] ', method, urlObj.pathname, paramObj);
        var rts = /([?&])_=[^&]*/;
        if(rts.test( req.url)){
            delete paramObj._;

            if(JSON.stringify(paramObj) !== "{}"){
                newSearch = '?';
                newSearch += JSON.stringify(paramObj).replace(/[\"\{\}]/g,"").replace(/\:/g,"=").replace(/\,/g,"&");
            }
        }

        var pathTree = urlObj.pathname.split('/');
        console.log('[pathTree]',pathTree);
        var mockDataFile = path.join(__dirname + path.sep + 'dataJs', pathTree[1]) + ".js";
        fs.access(mockDataFile, fs.F_OK, function (err) {
            var isImage = req.headers.accept.indexOf('image') != -1;
            console.log('[err]',err);
            if (err) {
                var c = {
                    "success": false,
                    "data": null,
                    "failCode": 404,
                    "params": null,
                    "message": "无响应数据",
                    "notFound": mockDataFile
                };
                //console.log('[response] ', c);
                res.setHeader('Content-Type', (isImage ? 'image/*' : 'application/json'));
                res.end(JSON.stringify(c));
                next();
                return;
            }

            try {
                var data = require(mockDataFile) || {};
                var result,mockUrl = pathTree[2]+newSearch;
                console.log('[mockUrl]',mockUrl);
                if(data[mockUrl] && typeof data[mockUrl] === "object"){
                    result = Mock.mock(data[mockUrl]);
                }else if(data[mockUrl]){
                    var params={body: JSON.stringify(paramObj)};
                    result = Mock.mock(data[mockUrl](params));
                }
                isImage && (result = Mock.Random.image(data[pathTree[2]]));
                console.log('[result]',result);
                res.setHeader('Access-Control-Allow-Origin', '*');
                res.setHeader('Content-Type', (isImage ? 'image/!*' : 'application/json'));
                res.setHeader('tokenId', uuid.v1());
                var s = result || {
                        "success": false,
                        "data": null,
                        "failCode": 0,
                        "params": null,
                        "message": null
                    };
                //console.log('[response] ', JSON.stringify(s));
                res.end(JSON.stringify(s) || s);
            } catch (e) {
                console.error(e);
            }
        });
        //next();
    }
    plugins.browserSync({
        //files: '/build/**', //监听整个项目
        open: 'local', // 'external' 打开外部URL, 'local' 打开本地主机URL
//        https: true,
        port: 80,
        online: false,
        notify: false,
        logLevel: "info",
        logPrefix: "test",
        logConnections: true, //日志中记录连接
        logFileChanges: true, //日志信息有关更改的文件
        scrollProportionally: false, //视口同步到顶部位置
        ghostMode: {
            clicks: false,
            forms: false,
            scroll: false
        },
        server: {
            baseDir: './dest',
            middleware: middleware
        }
    });

});

//默认命令，在cmd中输入gulp后，执行的就是这个命令
gulp.task('default', ['serve']);