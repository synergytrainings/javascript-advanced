// Karma configuration
// Generated on Sun Apr 26 2015 09:50:47 GMT+0400 (AMT)

module.exports = function(config) {
  config.set({

    // base path that will be used to resolve all patterns (eg. files, exclude)
    basePath: '',


    // frameworks to use
    // available frameworks: https://npmjs.org/browse/keyword/karma-adapter
    frameworks: ['jasmine', 'requirejs'],


    // list of files / patterns to load in the browser
    files: [
      'bower_components/jquery/dist/jquery.js'    
      ,'bower_components/requirejs/require.js'

      ,'node_modules/karma-requirejs/lib/adapter.js'

      ,{pattern: 'app/scripts/**/*.js', included:false}
      ,{pattern: 'app/tpl/**/*.tpl.html', included:false}
      ,{pattern: 'test/spec/**/*.spec.js', included: false}
      ,{pattern: 'bower_components/requirejs-text/text.js', included:false}
      
      ,'test/test-main.js',
    ],


    // list of files to exclude
    exclude: [
        'app/scripts/main.js'
    ],


    // preprocess matching files before serving them to the browser
    // available preprocessors: https://npmjs.org/browse/keyword/karma-preprocessor
    preprocessors: {
        'app/**/*.tpl.html':['html2js'],
        'app/**/*.js':['coverage']
    },


    // test results reporter to use
    // possible values: 'dots', 'progress'
    // available reporters: https://npmjs.org/browse/keyword/karma-reporter
    reporters: ['progress','coverage'],


    // web server port
    port: 9876,


    // enable / disable colors in the output (reporters and logs)
    colors: true,


    // level of logging
    // possible values: config.LOG_DISABLE || config.LOG_ERROR || config.LOG_WARN || config.LOG_INFO || config.LOG_DEBUG
    logLevel: config.LOG_INFO,


    // enable / disable watching file and executing tests whenever any file changes
    autoWatch: false,


    // start these browsers
    // available browser launchers: https://npmjs.org/browse/keyword/karma-launcher
    browsers: ['Chrome'/*, 'Firefox', 'PhantomJS'*/],


    // Continuous Integration mode
    // if true, Karma captures browsers, runs the tests and exits
    singleRun: false,

    // optionally, configure the reporter
    coverageReporter: {
      type : 'html',
      dir : 'coverage/',
      includeAllSources:true
    },

    plugins: [
      'karma-jasmine',
      'karma-requirejs',
      'karma-chrome-launcher',
      'karma-html2js-preprocessor',
      'karma-coverage'
    ]
  });
};
