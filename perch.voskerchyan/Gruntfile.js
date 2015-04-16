module.exports = function(grunt) {

// Project configuration.
grunt.initConfig({
	pkg: grunt.file.readJSON('package.json'),

	// HTML Hint
	htmlhintplus: {
		build: {
			src: ['app/*html']
		}
	},

	// CSS Lint
	csslint: {
		target: ['app/css/*.css']
	},

	// JS Hint
	jshint: {
		target: ['app/js/main.js']
	},

	// Uglify
	uglify: {
		options: {
			banner: '/*! <%= pkg.name %> <%= grunt.template.today("yyyy-mm-dd") %> */\n'
		},
		target: {
			files: {
				'app/js/main.min.js': ['app/js/main.js']
			}
		}
	},

	// Jasmine
	jasmine: {
		src: ['app/js/*.js'],
		options: {
			specs: ['app/test/spec.js']
		}
	},

	// Wiredep
	wiredep: {
		task: {
			src: ['app/*.html']
		}
	}
});

// Load the plugins
grunt.loadNpmTasks('grunt-htmlhint-plus');
grunt.loadNpmTasks('grunt-contrib-csslint');
grunt.loadNpmTasks('grunt-contrib-jshint');
grunt.loadNpmTasks('grunt-contrib-uglify');
grunt.loadNpmTasks('grunt-contrib-jasmine');
grunt.loadNpmTasks('grunt-wiredep');

// Default tasks
grunt.registerTask('default', ['csslint', 'htmlhintplus', 'jshint', 'uglify', 'jasmine']);

};