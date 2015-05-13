// Karma configuration

module.exports = function(config) {
    config.set({
               
               frameworks: ['jasmine-jquery', 'jasmine'],
               
               // list of files / patterns to load in the browser
               files: [
                        'bower_components/jquery/dist/jquery.js' ,
                       'bower_components/requirejs/require.js',
                       
                       'node_modules/karma-requirejs/lib/adapter.js',
                       
                       
                       {pattern: 'app/scripts/**/*.js', included:false},
                       {pattern: 'tests/spec/*Spec.js', included: false},
                       'tests/test-main.js'
                       ],
               
               logLevel: config.LOG_INFO,

               browsers: ['Chrome'],
           
               singleRun: true
    });
};