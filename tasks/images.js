const gulp = require("gulp");
const connect = require("gulp-connect");

function imageTask() {
    gulp.src('src/images/**/*')
        .pipe(gulp.dest('dist/assets/images'))
        .pipe(connect.reload());
}

function watchImages() {
    return gulp.watch("src/images/**/*", { ignoreInitial: false }, imageTask);
}

module.exports = {
    imageTask,
    watchImages
};