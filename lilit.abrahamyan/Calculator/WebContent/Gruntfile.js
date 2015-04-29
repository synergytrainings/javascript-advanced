module.exports = function(grunt) {

  grunt.loadNpmTasks('grunt-contrib-uglify');
  grunt.loadNpmTasks('grunt-contrib-jshint');
  grunt.loadNpmTasks('grunt-contrib-jasmine');
  grunt.loadNpmTasks('grunt-contrib-copy');
  grunt.loadNpmTasks('grunt-contrib-watch');
  grunt.loadNpmTasks('grunt-contrib-connect');
  grunt.loadNpmTasks('grunt-contrib-clean');
  
  grunt.initConfig({
    uglify: {
      uglify_options: {
    	  files: {
    		  'src/scripts/min/min.js': ['src/scripts/*.js']
    	  }
      }
    },
    jshint: {
        files: ['src/scripts/*.js', 'Gruntfile.js'],
    },
	
    jasmine : {
      src : 'src/**/*.js',
      options : {
        specs : 'spec/**/*.js'
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
    		src: [ '**', '**/**/*.css', '**/**/**/min.js', '*.html' ],
    		dest: 'build',
    		expand: true
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
          src: [
            'build'
          ]
        }]
      }
    },

  });

  grunt.registerTask('default', [ 'build', 'connect', 'watch' ]);

  grunt.registerTask('build', [
    'clean:all',
    'copy',
    'uglify',
    'jasmine',
    'connect'
   ]);

};