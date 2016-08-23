(function () {
   "use strict";
   var gulp = require('gulp');
   var uglify = require('gulp-uglify');
   var concat = require('gulp-concat');
   var rename = require('gulp-rename');

   var dirCss = "./assets/css";

   var jqueryDir = "./assets/js/jquery";
   var jquery = ["./assets/vendor/jQuery/dist/jquery.min.js",
      "./assets/vendor/jQuery/dist/jquery.min.map"];

   var angularDir = "./assets/js/angular";
   var angular = ["./assets/vendor/angular/angular.min.js",
      "./assets/vendor/angular/angular.min.js.map"];

   var dmlDirJs = "./assets/js/dml";
   var dmlJs = ["./assets/vendor/material-design-lite/material.min.js",
      "./assets/vendor/material-design-lite/material.min.js.map"];

   var dmlCss = ["./assets/vendor/material-design-lite/material.min.css",
      "./assets/vendor/material-design-lite/material.min.css.map"];

   gulp.task('dist', function() {
      gulp.src(jquery).pipe(gulp.dest(jqueryDir));
      gulp.src(angular).pipe(gulp.dest(angularDir));
      gulp.src(dmlJs).pipe(gulp.dest(dmlDirJs));
      gulp.src(dmlCss).pipe(gulp.dest(dirCss));
   });

   gulp.task('default', function() {
      gulp.run('dist');
   });


}());
