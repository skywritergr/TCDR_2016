var gulp = require('gulp'),
    requireDir = require('require-dir');

requireDir('./gulp');

gulp.task('default', ['server', 'watch', 'build-react']);