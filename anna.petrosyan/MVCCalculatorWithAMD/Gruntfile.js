module.exports = function(grunt) {
    "use strict";
    grunt.initConfig({
        pkg: grunt.file.readJSON('package.json'),
        jshint: {
            files: [ 'src/scripts/*.js']
        },
        uglify: {
            build: {
                src: ['src/scripts/*.js'],
                dest:'src/scripts/compressed/min.js'
            }
        },
        jasmine : {
            amd: true,
            // Your Jasmine spec files
            specs : 'src/tests/main.spec.js',
            // Your spec helper files
            helpers: [
                '/src/libs/require.js',
                '/src/scripts/main.js'
            ]
        }
    });
    grunt.loadNpmTasks('grunt-contrib-jshint');
    grunt.loadNpmTasks('grunt-contrib-uglify');
    grunt.loadNpmTasks('grunt-jasmine-runner');
    grunt.registerTask('validate', ['jshint']);
    grunt.registerTask('minify', ['uglify']);
    grunt.registerTask('test', ['jasmine']);
    //grunt.registerTask('uglify', ['uglify']);
    //grunt.registerTask('default', ['jasmine']);

};