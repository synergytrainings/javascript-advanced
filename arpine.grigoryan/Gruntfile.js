module.exports = function(grunt) {
grunt.initConfig({

   	 // Validate js files with jshint.
    	jshint: { all: [ 'src/**/*.js']
	},
	
	//Minify files with UglifyJS.
	uglify: {
		my_target: {
		  files: {
			'minify/output.min.js': ['*.js']
			}
		}
  	},

	jasmine: {
		src: 'src/scripts/*.js',
		options: {
			specs: 'src/tests/*Spec.js'
		}
	}
	

  });

  grunt.loadNpmTasks('grunt-contrib-jshint');
  grunt.loadNpmTasks('grunt-contrib-uglify');
  grunt.loadNpmTasks('grunt-contrib-jasmine');

  grunt.registerTask('default', ['jshint', 'uglify', 'jasmine']);
};