const gulp = require('gulp');
const pkg = require('./package.json');

const $ = require('gulp-load-plugins')({
  pattern: ["*"],
  scope: ["devDependencies"],
  rename: {
    'gulp-jshint': 'gulpJsHint'
  }
});

const banner = [
    "/**",
    ` * @project        ${pkg.name}`,
    ` * @author         ${pkg.author}`,
    " * @build          " + $.moment().format("llll") + " ET",
    " * @copyright      Copyright (c) " + $.moment().format("YYYY") + `, ${pkg.copyright}`,
    " *",
    " */",
    ""
].join("\n");


const sass = () => {
  $.fancyLog("Building sass");
  return (
    gulp.src(pkg.paths.src.scss)
       .pipe($.plumber())
       .pipe($.sass())
       .pipe($.autoprefixer())
       .pipe($.sourcemaps.write("./"))
       .pipe($.header(banner, { pkg: pkg }))
       .pipe(gulp.dest(pkg.paths.build.css))
       .pipe($.livereload())
  );
};


const html = () => {
  $.fancyLog("Building html");
  return (
    gulp.src(pkg.paths.src.html)
        .pipe(gulp.dest(pkg.paths.build.html))
        .pipe($.livereload())
  );
};

const js = () => {
  $.fancyLog("Building js");
  return (
    gulp.src(pkg.paths.src.js)
        .pipe($.plumber())
        .pipe($.sourcemaps.init())
        .pipe($.gulpJsHint())
        .pipe($.concat('app.js'))
        .pipe($.uglify())
        .pipe($.rename({ suffix: '.min'}))
        .pipe($.sourcemaps.write('.'))
        .pipe(gulp.dest(pkg.paths.build.js))
        .pipe($.livereload())
  )
};


const assets = () => {
  $.fancyLog("Building assets");
  return (
    gulp.src(pkg.paths.src.assets)
        .pipe(gulp.dest(pkg.paths.build.assets))
        .pipe($.livereload())
  );
};


const watch = () => {
  $.livereload.listen();

  gulp.watch(pkg.paths.src.scss, sass);
  gulp.watch(pkg.paths.src.html, html);
};

exports.watch = watch;
exports.sass = sass;
exports.html = html;
exports.assets = assets;
exports.js = js;
