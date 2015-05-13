var pkgjson = require('./package.json');
 
var config = {
  pkg: pkgjson,
  app: 'app',
  scripts: 'app/scripts'
}



module.exports = function(grunt) {
grunt.initConfig({
	config: config,
    	pkg: config.pkg,
	bower: grunt.file.readJSON('bower.json'),

   	 // Validate js files with jshint.
//    	jshint: {
//                 all: [ '<%= config.app%>/**/*.js']
//                 options: {
//                 jshintrc: true;
//                 }
//        },
                 
        jshint: {
            files: ['<%= config.scripts%>/**/*.js'],
                 options: {
                    globals: {
                    jQuery: true
                 }
            }
        },
	
	//Minify files with UglifyJS.
	uglify: {
		
		options: {
        		banner: '/*! <%= pkg.name %> lib - v<%= bower.version %> -' +
         		 '  author <%= bower.authors%> at  <%= grunt.template.today("yyyy-mm-dd") %> */'
     		},

		result: {
		  files: {
			'<%= config.app%>/minify/scripts/output.min.js': ['<%= config.scripts%>/**/*.js']
			}
		}
  	},
                 
    cssmin: {
        css:{
            src: '<%= config.app%>/styles/style.css',
            dest:'<%= config.app%>/minify/styles/concat.min.css'
        }
    },
                 
    htmlmin: {
        dist: {
            options: {
                removeComments: true,
                collapseWhitespace: true
            },
            files: {
                 '<%= config.app%>/minify/index.html': '<%= config.app%>/index.html'
            }
        }
    },
                 
                 
    watch: {
        scripts: {
            files: ['<%= config.scripts%>/**/*.js'],
            tasks: ['jshint']
        },
        configFiles: {
            files: [ 'Gruntfile.js' ],
                options: {
                 reload: true
            }
        }
    },
                 
    concat: {
        dist: {
            src: ['<%= config.scripts%>/enums/ButtonType.js',
                  '<%= config.scripts%>/enums/OperetionType.js'],
            dest: '<%= config.app%>/concat/enums.js',
        },
    },
    connect: {
        server: {
            options: {
                 port: 8900,
                 open: {
                    target: 'http://localhost:8900/index.html'
                 },
                 livereload: false,
                 hostname: '127.0.0.1',
                 protocol: 'http',
                 base: 'app',
                 keepalive: true,
                 middleware: function(connect) {
                 return [
                         connect.static('app'),
                         connect().use('/bower_components', connect.static('./bower_components')),
                         connect.static(config.app)
                         ];
                 }
            },
                 
                 
        }
    },
                 
    karma: {
        unit: {
                 configFile: 'karma.config.js',
        }
    },
    
    requirejs: {
        compile: {
            options: {
                 baseUrl: '<%= config.scripts%>',
                 mainConfigFile: '<%= config.scripts%>/main.js',
                 name: 'main', // assumes a production build using almond
                 out: '<%= config.app%>/minify/scripts/app.min.js'
            }
        }
    },

//	jasmine: {
//		src: '<%= config.scripts%>/OperetionType.js',
//		options: {
//			specs: '<%= config.app%>/tests/*Spec.js',
//                 vendor: [
//                          "<%= config.app%>/bower_components/jquery/dist/jquery.js",
//                          "<%= config.app%>/jasmine-jquery/lib/jasmine-jquery.js"
//                          ]
//		}
//	},
                 
//    karma: {
//                 options: {
//                 // point all tasks to karma config file
//                 configFile: 'karma.config.js'
//                 },
//                 unit: {
//                 // run tests once instead of continuously
//                 singleRun: true
//                 }
//    }
	

  });

  grunt.loadNpmTasks('grunt-contrib-jshint');
  grunt.loadNpmTasks('grunt-contrib-uglify');
  grunt.loadNpmTasks('grunt-karma');
  grunt.loadNpmTasks('grunt-contrib-cssmin');
  grunt.loadNpmTasks('grunt-contrib-htmlmin');
  grunt.loadNpmTasks('grunt-contrib-watch');
  grunt.loadNpmTasks('grunt-contrib-concat');
  grunt.loadNpmTasks('grunt-contrib-connect');
  grunt.loadNpmTasks('grunt-contrib-requirejs');
  
  grunt.registerTask('min', [
                                'uglify',
                                'htmlmin',
//                                'clean',
                                'cssmin',
                                'concat'
                                ]);
    grunt.registerTask('tests', [
                                'karma'
                                ]);
    
    grunt.registerTask('default', [
                                   'min',
                                   'tests',
                                   'jshint',
                                   'connect',
                                   'requirejs',
//                                   'watch'
                                   ]);
    
   
};
