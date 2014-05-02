'use strict';
module.exports = function(grunt) {

  grunt.initConfig({
    pkg: grunt.file.readJSON('package.json'),
    // bwr: grunt.file.readJSON('bower.json'),
    banner: "/*! <%= pkg.title || pkg.name %> v<%= pkg.version %> | " +
            "(c) 2012, <%= grunt.template.today('yyyy') %>, <%= pkg.author %> | " +
            "Licensed <%= _.pluck(pkg.licenses, 'url').join(', ') %> */",
    jshint: {
      options: {
        jshintrc: '.jshintrc'
      },
      all: [
        'Gruntfile.js',
        'js/*.js',
        '!js/*.min.js'
      ]
    },
    less: {
      dist: {
        files: {
          'css/style.min.css': [
            '_files/less/options.less'
          ]
        },
        options: {
          compress: true,
          // LESS source map
          // To enable, set sourceMap to true and update sourceMapRootpath based on your install
          sourceMap: false,
          sourceMapFilename: 'css/style.min.css.map',
          sourceMapRootpath: '/css/'
        }
      }
    },
    uglify: {
      dist: {
        files: {
          'js/main.min.js': [
            '_files/vendor/bootstrap/js/transition.js',
            '_files/vendor/bootstrap/js/alert.js',
            '_files/vendor/bootstrap/js/button.js',
            '_files/vendor/bootstrap/js/collapse.js',
            '_files/vendor/bootstrap/js/dropdown.js',
            '_files/vendor/bootstrap/js/modal.js',
            '_files/vendor/bootstrap/js/tooltip.js',
            '_files/vendor/bootstrap/js/popover.js',
            '_files/vendor/bootstrap/js/scrollspy.js',
            '_files/vendor/bootstrap/js/tab.js',
            '_files/vendor/bootstrap/js/affix.js',
            '_files/js/plugins/*.js',
            '_files/js/options.js'
          ]
        },
        options: {
          // JS source map: to enable, uncomment the lines below and update sourceMappingURL based on your install
          // sourceMap: 'js/scripts.min.js.map',
          // sourceMappingURL: 'js/scripts.min.js.map'
          banner: '<%= banner %>',
          preserveComments: false,
          report: "min"
        }
      },   
      release: {
        files: {
          'js/vendor/jquery.min.js': [
            '_files/vendor/jquery/dist/jquery.js'
          ]
        },
        options: {
          banner: '/*! jQuery | (c) 2005, 2014 jQuery Foundation, Inc. | jquery.org/license */',
          preserveComments: false,
          report: "min"
        }
      }
    },
    modernizr: {
      dist: {
        devFile: '_files/vendor/modernizr/modernizr.js',
        outputFile: 'js/vendor/modernizr.min.js',
        files: {
          src: ['css/*.css', 'js/*.js']
        },
        uglify: true,
        parseFiles: false
      }
    },
    watch: {
      less: {
        files: [
          '*.json',
          '_files/less/*.less',
          '_files/less/options/*.less',
          '_files/less/**/*.less'
        ],
        tasks: ['less']
      },
      js: {
        files: [
          '*.json',
          '<%= jshint.all %>'
        ],
        tasks: ['jshint', 'uglify']
      },
      livereload: {
        // Browser live reloading
        // https://github.com/gruntjs/grunt-contrib-watch#live-reloading
        options: {
          livereload: true
        },
        files: [
          'css/style.min.css',
          'js/*.min.js',
          '*.html'
        ]
      }
    },
    copy: {
      main: {
        files: [
          {expand: true, flatten: true, src: ['_files/vendor/jquery/dist/jquery.min.js'], dest: 'js/vendor/', filter: 'isFile'},
          {expand: true, flatten: true, src: ['_files/vendor/jquery/dist/jquery.min.map'], dest: 'js/vendor/', filter: 'isFile'}
        ]
      }
    },
    clean: {
      dist: [
        'css/*.map',
        'js/*.map',
        'css/*.min.css',
        'js/*.min.js',
      ]
    },
    usebanner: {
      dist: {
        options: {
          position: 'top',
          banner: '<%= banner %>',
          linebreak: true
        },
        files: {
          src: ['css/*.css']
        }
      }
    }
  });

  // Load tasks
  grunt.loadNpmTasks('grunt-contrib-clean');
  grunt.loadNpmTasks('grunt-contrib-jshint');
  grunt.loadNpmTasks('grunt-contrib-uglify');
  grunt.loadNpmTasks('grunt-contrib-watch');
  grunt.loadNpmTasks('grunt-contrib-less');
  grunt.loadNpmTasks('grunt-contrib-copy');
  grunt.loadNpmTasks('grunt-banner');
  grunt.loadNpmTasks('grunt-modernizr');

  // Register tasks
  grunt.registerTask('default', [
    'clean',
    'less',
    'uglify:dist',
    'modernizr',
    'usebanner',
    'copy'
  ]);
  grunt.registerTask('dev', [
    'default',
    'watch'
  ]);
  grunt.registerTask('build', [
    'clean',
    'less',
    'uglify',
    'usebanner',
    'modernizr'
  ]);
};