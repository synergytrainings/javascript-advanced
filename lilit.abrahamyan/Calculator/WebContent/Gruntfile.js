module.exports = function(grunt) {

  grunt.loadNpmTasks('grunt-contrib-uglify');
  grunt.loadNpmTasks('grunt-contrib-jshint');
  grunt.loadNpmTasks('grunt-contrib-jasmine');
  
  grunt.initConfig({
    uglify: {
      uglify_options: {
    	  files: {
    		  'min/min.js': ['src/*']
    	  }
      }
    },
    jshint: {
        files: ['src/calculator.js', 'Gruntfile.js'],
    },
	
    jasmine : {
      src : 'src/**/*.js',
      options : {
        specs : 'spec/**/*.js'
      }
    }
	
  });

  grunt.registerTask('default', ['uglify']);

};