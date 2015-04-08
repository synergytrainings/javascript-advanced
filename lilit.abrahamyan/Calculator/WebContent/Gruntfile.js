module.exports = function(grunt) {

  grunt.loadNpmTasks('grunt-contrib-uglify');
  grunt.loadNpmTasks('grunt-contrib-jshint');

  
  grunt.initConfig({
    uglify: {
      my_target: {
    	  files: {
    		  'src/min.js': ['src/calculator.js']
    	  }
      }
    },
    jshint: {
        files: ['src/calculator.js'],
    }
  });

  grunt.registerTask('default', ['uglify']);

};