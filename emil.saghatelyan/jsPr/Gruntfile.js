/*global module:false*/
module.exports = function(grunt) {

  // Project configuration.
  grunt.initConfig({
      uglify: {
          target: {
              files: {
                  'src/scripts/min.js': ['src/scripts/*.js']
              }
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
      }

  });


  grunt.loadNpmTasks('grunt-contrib-uglify');
  grunt.loadNpmTasks('grunt-contrib-jshint');
  grunt.loadNpmTasks('grunt-contrib-jasmine');
  grunt.loadNpmTasks('grunt-contrib-connect');


  // Default task.
  grunt.registerTask('default', ['jshint', 'uglify']);
  grunt.registerTask('uglify', ['uglify']);

};
