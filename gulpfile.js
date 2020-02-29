let gulp = require("gulp")
let connect = require("gulp-connect")
const ghPages = require('gulp-gh-pages');
let { watchHTML,htmlTask } = require("./tasks/html")
let { watchCSS,cssTask } = require("./tasks/css")
let { watchJS,jsTask } = require("./tasks/js")
let { watchImages,imageTask } = require("./tasks/images")
let { watchMedia,mediaTask } = require("./tasks/media")

function watch() {
  watchHTML();
  watchCSS();
  watchJS();
  watchImages();
  watchMedia();
  connect.server({
    livereload: true,
    root: "dist"
  });
};

function build(done){
  htmlTask();
  cssTask();
  jsTask();
  imageTask();
  mediaTask();
  console.log(done)
  done()
  
}

function deploy(done){
  gulp.src('./dist/**/*').pipe(ghPages())
  done()
}


gulp.task('deploy', () => gulp.src('./dist/**/*').pipe(ghPages()));

exports.default = watch;
exports.build = build;
// exports.deploy = deploy;