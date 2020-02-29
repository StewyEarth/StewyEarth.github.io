const gulp = require("gulp");
const connect = require("gulp-connect");

function miscTask(){
    return gulp.src("src/*")
    .pipe(gulp.dest('dist/'))
    .pipe(connect.reload())
}

function watchMisc(){
    return gulp.watch("src/*",{ignoreInitial: false},miscTask)
}

module.exports = {
    miscTask,
    watchMisc
}