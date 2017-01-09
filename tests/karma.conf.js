module.exports = function(config) {
  config.set({

    basePath: '.',

    // frameworks to use
    frameworks: ['jasmine'],

    // list of files 
    files: [
      '../app/bower_components/angular/angular.js',
      '../app/bower_components/jquery/dist/jquery.js',
      './unit/*.js',
      '../app/app.js'
    ],

    reporters: ['progress'],

    port: 9876,

    colors: true,

    logLevel: config.LOG_INFO,

    autoWatch: true,

    browsers: ['Chrome'],

    singleRun: false
  });
};