/*global module:false*/
module.exports = function (grunt) {

    // Project configuration.
    grunt.initConfig({
        pkg: grunt.file.readJSON('package.json'),
        uglify: {
            build: {
                src: ['src/scripts/*.js'],
                dest: 'src/scripts/min/min.js'
            }
        },
        jshint: {
            files: ['src/scripts/*.js']
        },
        jasmine: {
            test: {
                src: 'src/scripts/*.js',
                options: {
                    specs: 'src/tests/*.spec.js'
                }
            }
        },
        cssmin: {
            build: {
                files: {
                    'src/style/style-min.css': ['src/style/*.css']
                }
            }
        },
        connect: {
            server: {
                options: {
                    port: 8081,
                    open: {
                        target: 'http://localhost:8081/calc.html'
                    },
                    keepalive: true,
                    livereload: false,
                    hostname: '127.0.0.1',
                    protocol: 'http',
                    base: 'release',

                    middleware: function (connect) {
                        return [
                            connect.static('release'),
                            connect().use('/bower_components', connect.static('./bower_components'))

                        ];
                    }
                }
            }},
        clean: {
            all: {
                files: [
                    {
                        src: 'release'
                    }
                ]
            }
        },
        copy: {
            build: {
                cwd: 'src',
                src: ['style/style-min.css', 'scripts/min/min.js', '*.html' ],
                dest: 'release',
                expand: true
            }
        },
        useminPrepare: {
            html: 'release/calc.html'
        },

        usemin: {
            html: 'release/calc.html'
        }


    });


    grunt.loadNpmTasks('grunt-contrib-uglify');
    grunt.loadNpmTasks('grunt-contrib-jshint');
    grunt.loadNpmTasks('grunt-contrib-jasmine');
    grunt.loadNpmTasks('grunt-contrib-connect');
    grunt.loadNpmTasks('grunt-contrib-cssmin');
    grunt.loadNpmTasks('grunt-contrib-clean');
    grunt.loadNpmTasks('grunt-contrib-copy');
    grunt.loadNpmTasks('grunt-usemin');


    // Default task.
    // grunt.registerTask('default', ['jshint', 'uglify']);

    grunt.registerTask('minify', ['uglify']);
    grunt.registerTask('minifycss', ['cssmin']);
    grunt.registerTask('validate', ['jshint']);
    //grunt.registerTask('runcalc', ['connect']);
    grunt.registerTask('runcalc', ['connect']);

    grunt.registerTask('run', [
        'clean:all',
        'uglify',
        'copy',
        'useminPrepare',
        'usemin',
        'connect'
    ]);

};
