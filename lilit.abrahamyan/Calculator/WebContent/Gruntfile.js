module.exports = function(grunt) {

  grunt.loadNpmTasks('grunt-contrib-uglify');
  grunt.loadNpmTasks('grunt-contrib-jshint');
  grunt.loadNpmTasks('grunt-contrib-jasmine');
  grunt.loadNpmTasks('grunt-contrib-copy');
  grunt.loadNpmTasks('grunt-contrib-watch');
  grunt.loadNpmTasks('grunt-contrib-connect');
  grunt.loadNpmTasks('grunt-contrib-clean');
  grunt.loadNpmTasks('grunt-contrib-concat');
  grunt.loadNpmTasks('grunt-contrib-cssmin');
  grunt.loadNpmTasks('grunt-usemin');

  grunt.initConfig({
    uglify: {
      uglify_options: {
    	  files: {
    		  'src/scripts/min/min.js': ['src/scripts/calculator/*.js', 'src/scripts/table/*.js', 'src/scripts/main.js']
    	  }
      }
    },

    jshint: {
        files: ['src/scripts/**/*.js', 'Gruntfile.js'],
    },

    karma: {
      unit: {
        configFile: 'karma.conf.js'
      }
    },
	
    jasmine : {
      src : [ 'src/scripts/**/*.js'],
	  options: {
		specs: ['spec/test.js'],
		helpers: [
                'node_modules/requirejs/require.js'
            ],
		vendor: [
			'node_modules/requirejs/require.js'
		],
		amd: true
	  }
    },

    watch: {
      allTests: {
        files: ['<%= jasmine.src %>'],
        tasks: ['jshint', 'jasmine']
      },
      sources : {
        files: ['<%= jshint.files %>'],
        tasks: ['jshint']
      }
    },

    copy: {
		build: {
			cwd: 'src',
				src: [ '**/**/*.css', '**/**/**/concat.js', '*.html' ],
				dest: 'build',
				expand: true
		},
     },


     cssmin: {
		minify: {
    		src:'src/css/styles.css',
    		dest: 'src/css/min/styles.css'
		}
     },

     connect: {
		server: {
			options: {
				port: 8081,
					open: {
                     target: 'http://localhost:8081/test.html'
            	},
				keepalive: true,
				livereload: false,
				hostname: '127.0.0.1',
				protocol: 'http',
				base: 'build'
       	    }
		}
     },

    clean: {
      all: {
        files: [{
          src: 'build'
        }]
      }
    },
	
 /* requirejs: {
      dist: {
        options: {
            baseUrl: 'src/scripts',
            optimize: 'uglify',
            name: 'main',
            mainConfigFile: 'src/scripts/main.js'
        }
      }
    },*/

    useminPrepare: {
 	 html: 'build/test.html',
    },

    usemin: {
 	 html: 'build/test.html',
    },

    concat: {
      default_options: {
        files: {
          'src/scripts/concat/concat.js': ['node_modules/requirejs/require.js', 'src/scripts/min/min.js', 'bower_components/jquery/dist/jquery.js', 'bower_components/bootstrap/dist/js/bootstrap.js'],
          'src/scripts/concat/concat.css': ['src/css/min/styles.css', 'bower_components/bootstrap/dist/css/bootstrap.min.css', 'bower_components/bootstrap/dist/css/bootstrap-theme.css']
	}
      }
    }

  });

  grunt.registerTask('default', [ 'build', 'connect', 'watch' ]);
  
  grunt.registerTask('build', [
    'clean:all',
    'uglify',
  //  'requirejs',
    'cssmin',
    'concat',
 //   'jasmine',
    'copy',
    'useminPrepare',
    'usemin',
    'connect'
   ]);

};