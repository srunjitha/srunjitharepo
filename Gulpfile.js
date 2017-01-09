var gulp = require('gulp'),
    connect = require('gulp-connect'),
    Server = require('karma').Server;


gulp.task('connect', function () {
  connect.server({
    root: 'app/',
    port: 8888
  });
});

gulp.task('unit', function (done) {
  var server = new Server({
    configFile: __dirname + '/tests/karma.conf.js',
    singleRun: true
  }, done);
  server.start();
});


gulp.task('default', ['connect']);