

  var gulp = require('gulp');
  //压缩html
  var htmlminify = require("gulp-html-minify");
gulp.task('build-html' , function(){
    return gulp.src('src/*.html')
        .pipe(htmlminify())
        .pipe(gulp.dest("./html"))
});

  gulp.task("start",["build-html"])
  
  

//压缩css
// var cleanCSS = require('gulp-clean-css');
// 
// gulp.task('minify-css', function() {
// return gulp.src('src/css/*.css')
//  .pipe(cleanCSS({compatibility: 'ie8'}))
//  .pipe(gulp.dest('dist'));
// });
//
//压缩图片
// var imagemin = require('gulp-imagemin');
// 
// gulp.task('imagemin', () =>
//   gulp.src('src/images2/*')
//      .pipe(imagemin())
//       .pipe(gulp.dest('dist/images'))
// );
//
//	gulp.task("start",["imagemin"])

 
//压缩js
//var jsmin = require('gulp-jsmin');
//var rename = require('gulp-rename');
// 
//gulp.task('default', function () {
//  gulp.src('src/**/*.js')
//      .pipe(jsmin())
//      .pipe(rename({suffix: '.min'}))
//      .pipe(gulp.dest('dist'));
//});
//
//gulp.task("start",["default"])