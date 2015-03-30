module.exports = function(config){
  config.set({

    basePath : './',

    files : [
        'node_modules/angular/angular.min.js',
        'node_modules/angular-route/angular-route.min.js',
        'node_modules/angular-mocks/angular-mocks.js',
        'node_modules/rx/dist/rx.all.min.js',
        'app/app.js',
        'app/Service/*.js',
        'app/**/*.js',
        'app/**/**/*_test.js'
    ],

    autoWatch : true,

    frameworks: ['jasmine'],

    browsers : ['Chrome'],

    plugins : [
            'karma-chrome-launcher',
            'karma-firefox-launcher',
            'karma-jasmine',
            'karma-junit-reporter'
            ],

    junitReporter : {
      outputFile: 'test_out/unit.xml',
      suite: 'unit'
    },

      logLevel: 'INFO'

  });
};
