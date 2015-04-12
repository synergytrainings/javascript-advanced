module.exports = function(grunt) {

    grunt.initConfig({
        pkg: grunt.file.readJSON('package.json'),
        jshint: {
            files: ['gruntfile.js', 'src/scripts/*.js']
        },
        uglify: {
            build: {
                src: ['src/scripts/main.js'],
                dest:['src/scripts/main.min.js']
            }
        },
        jasmine : {
            test: {
                src: 'src/scripts/*.js',
                options: {
                    specs: 'src/tests/*.spec.js'
                }
            }
        }
    });

    grunt.loadNpmTasks('grunt-contrib-jshint');
    grunt.loadNpmTasks('grunt-contrib-uglify');
    grunt.loadNpmTasks('grunt-contrib-jasmine');
    grunt.registerTask('uglify', ['uglify']);
    grunt.registerTask('default', ['jasmine']);

};