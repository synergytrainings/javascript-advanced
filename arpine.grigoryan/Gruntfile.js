var pkgjson = require('./package.json');
 
var config = {
  pkg: pkgjson,
  app: 'src'
}



module.exports = function(grunt) {
grunt.initConfig({
	config: config,
    	pkg: config.pkg,
	bower: grunt.file.readJSON('bower.json'),

   	 // Validate js files with jshint.
    	jshint: { all: [ '<%= config.app%>/**/*.js']
	},
	
	//Minify files with UglifyJS.
	uglify: {
		
		options: {
        		banner: '/*! <%= pkg.name %> lib - v<%= bower.version %> -' +
         		 '  author <%= bower.authors%> at  <%= grunt.template.today("yyyy-mm-dd") %> */'
     		},

		my_target: {
		  files: {
			'minify/output.min.js': ['<%= config.app%>/**/*.js']
			}
		}
  	},

	jasmine: {
		src: '<%= config.app%>/scripts/*.js',
		options: {
			specs: '<%= config.app%>/tests/*Spec.js'
		}
	}
	

  });

  grunt.loadNpmTasks('grunt-contrib-jshint');
  grunt.loadNpmTasks('grunt-contrib-uglify');
  grunt.loadNpmTasks('grunt-contrib-jasmine');

  grunt.registerTask('default', ['jshint', 'uglify', 'jasmine']);
};