'use strict';

var gulp = require('gulp'),
    nodemon = require('gulp-nodemon');

gulp.task('nodemon', function (cb) {
    var started = false;
    return nodemon({
        script: 'server/app.js'
    }).on('start', function () {
        if (!started) {
            cb();
            started = true;
        }
    })
})
