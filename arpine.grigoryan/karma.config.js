// Karma configuration

module.exports = function(config) {
    config.set({
               
               frameworks: ['jasmine-jquery', 'jasmine'],
               
               // list of files / patterns to load in the browser
               files: [
                        'bower_components/jquery/dist/jquery.js' ,'bower_components/requirejs/require.js',
                       'tests/test-main.js',
                       'tests/spec/*Spec.js'
                       ],
               
               logLevel: config.LOG_INFO,

               browsers: ['Chrome'],
           
               singleRun: true
    });
};