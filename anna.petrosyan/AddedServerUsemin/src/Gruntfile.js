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
        },
        connect: {
            server: {
                options: {
                    port: 8081,
                    open: {
                        target: 'http://localhost:8081/index.html'
                    },
                    keepalive: true,
                    livereload: false,
                    hostname: '127.0.0.1',
                    protocol: 'http',
                    base: 'build'
                }
            }
        },
        cssmin: {
            minify: {
                src: 'src/style/main.css',
                dest: 'src/style/main.min.css'
            }
        },
        htmlmin: {                                     // Task
            dist: {                                      // Target

                files: {                                   // Dictionary of files
                    'src/web/index.min.html': 'src/web/index.html'    // 'destination': 'source'
                }
            }
        },
        copy: {
            build: {
                cwd: 'src',
                src: [ 'style/*.min.css', 'scripts/concat/concat.js', '*.html' ],
                dest: 'build',
                expand: true
            }
        },
        clean: {
            all: {
                files: [{
                    src: 'build'
                }]
            }
        },
        useminPrepare: {
            html: 'build/index.html'
        },

        usemin: {
            html: 'build/index.html'
        },
        concat: {
            default_options: {
                files: {
                    'src/scripts/concat/concat.js': [ 'bower_components/jquery/dist/jquery.min.js','bower_components/requirejs/require.js','src/scripts/compressed/min.js']
                }
            }
        }
    });
    grunt.loadNpmTasks('grunt-contrib-jshint');
    grunt.loadNpmTasks('grunt-contrib-uglify');
    grunt.loadNpmTasks('grunt-contrib-connect');
    grunt.loadNpmTasks('grunt-contrib-cssmin');
    grunt.loadNpmTasks('grunt-contrib-htmlmin');
    grunt.loadNpmTasks('grunt-contrib-copy');
    grunt.loadNpmTasks('grunt-contrib-clean');
    grunt.loadNpmTasks('grunt-contrib-concat');
    grunt.loadNpmTasks('grunt-usemin');

    grunt.registerTask('validate', ['jshint']);
    grunt.registerTask('minify', ['uglify','cssmin','htmlmin']);
    grunt.registerTask('build', [
        'clean',
        'uglify',
        'concat',
        'copy',
        'useminPrepare',
        'usemin',
        'connect'
    ]);



};