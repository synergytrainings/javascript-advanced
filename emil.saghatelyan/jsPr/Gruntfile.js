/*global module:false*/
module.exports = function(grunt) {

  // Project configuration.
  grunt.initConfig({
      uglify: {
          my_target: {
              files: {
                  'src/scripts/min.js': ['src/scripts/calculator.js']
              }
          }
      },
      jshint: {
          files: ['src/scripts/calculator.js']
      },
      jasmine: {
          test: {
              src: 'src/scripts/*.js',
              options: {
                  specs: 'src/tests/*.spec.js'
              }
          }
      }

  });


  grunt.loadNpmTasks('grunt-contrib-uglify');
  grunt.loadNpmTasks('grunt-contrib-jshint');
  grunt.loadNpmTasks('grunt-contrib-jasmine');


  // Default task.
  grunt.registerTask('default', ['jshint', 'uglify']);

};
