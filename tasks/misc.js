const gulp = require("gulp");
const connect = require("gulp-connect");

function miscTask(){
    return gulp.src("src/*.{xml,webmanifest,txt}")
    .pipe(gulp.dest('dist/'))
    .pipe(connect.reload())
}

function watchMisc(){
    return gulp.watch("src/*.{xml,webmanifest,txt}",{ignoreInitial: false},miscTask)
}

module.exports = {
    miscTask,
    watchMisc
}