module.exports = function(grunt) {
    require('time-grunt')(grunt);
    // Load prefixer config file
    var configBridge = grunt.file.readJSON('./assets/sass/config/configBridge.json', { encoding: 'utf8' });

    // 1. Project configuration
    grunt.initConfig({
        pkg: grunt.file.readJSON('package.json'),

        notify: {
            watch: {
                options: {
                    title: 'Task Complete',
                    message: 'Sass Files Compiled'
                }
            },
            html: {
                options: {
                    title: 'Task Complete',
                    message: 'HTML Files Compiled'
                }
            },
            server: {
                options: {
                    message: 'Server is ready!'
                }
            },
            dist: {
                options: {
                    message: 'Sass/JS files minified and distributed'
                }
            }
        },

        htmllint: {
          all: ["dist/*.html"]
        },

        clean: {
          dist: ["dist"],
        },

        jshint: {
          all: ['Gruntfile.js', 'assets/js/main.js', 'assets/js/src/*.js']
        },

        bootlint: {
            options: {
                stoponerror: false,
                relaxerror: []
            },
            files: ['dist/*.html']
        },

        concat: {
            options: {
              stripBanners: false
            },
            bootstrap: {
              src: [
                'assets/js/vendor/jquery-plugins/bootstrap/util.js',
                'assets/js/vendor/jquery-plugins/bootstrap/transition.js',
                'assets/js/vendor/jquery-plugins/bootstrap/alert.js',
                'assets/js/vendor/jquery-plugins/bootstrap/button.js',
                'assets/js/vendor/jquery-plugins/bootstrap/carousel.js',
                'assets/js/vendor/jquery-plugins/bootstrap/collapse.js',
                'assets/js/vendor/jquery-plugins/bootstrap/dropdown.js',
                'assets/js/vendor/jquery-plugins/bootstrap/modal.js',
                'assets/js/vendor/jquery-plugins/bootstrap/tooltip.js',
                'assets/js/vendor/jquery-plugins/bootstrap/popover.js',
                'assets/js/vendor/jquery-plugins/bootstrap/scrollspy.js',
                'assets/js/vendor/jquery-plugins/bootstrap/tab.js',
                'assets/js/vendor/jquery-plugins/bootstrap/affix.js'
              ],
              dest: 'assets/js/vendor/jquery-plugins/jquery.bootstrap.js'
            },
            dist: {
                src: [
                    'assets/js/vendor/jquery-plugins/*.js', // Globally used jQuery Plugins and Libs
                    'assets/js/main.js',                    // Main JS file
                    'assets/js/src/*.js'                    // Custom JS files
                ],
                dest: 'assets/js/build/production.js',
                options: {
                    message: 'JS files minified and distributed'
                }
            }
        },

        jscs: {
            src: [
                'assets/js/main.js',
                'assets/js/src/*.js',
                '!assets/js/build/*.js'
            ],
            options: {
                config: ".jscsrc",
                fix: true,
                requireCurlyBraces: [ "if" ]
            }
        },

        uglify: {
            options: {
              compress: {
                warnings: false
              },
              mangle: true,
              preserveComments: /^!|@preserve|@license|@cc_on/i
            },
            build: {
                src: 'assets/js/build/production.js',
                dest: 'assets/js/build/production.min.js'
            }
        },

        sass: {
            compile: {
                files: {
                    "assets/css/style.css": "assets/sass/style.scss"
                }
            }
        },

        csslint: {
            strict: {
                src: ['assets/css/style.css']
            },
            lax: {
                options: {
                    csslintrc: 'assets/sass/config/.csslintrc'
                },
                src: ['assets/css/style.css']
            }
        },

        cssmin: {
            dist: {
                options: {
                    keepSpecialComments: '0'
                },
                files: {
                    'assets/css/style.min.css': ['assets/css/style.css']
                }
            }
        },

        connect: {
          server: {
            options: {
              port: 3000,
              base: 'dist',
              hostname: '127.0.0.1',
              livereload: true
            }
          }
        },

        watch: {
            livereload: {
                options: { livereload: true },
                files: ['assets/**/*', '*.html', 'partials/*.html'],
            },
            scripts: {
                files: ['assets/js/*.js', 'assets/js/src/*.js'],
                tasks: ['jshint', 'concat', 'jscs', 'uglify', 'copy:dist', 'notify:dist' ],
                options: {
                    spawn: false
                }
            },
            sass: {
                files: ['assets/sass/**/*.scss'],
                tasks: ['sass', 'csscomb:dist', 'cssmin:dist', 'autoprefixer:styles', 'copy:dist', 'notify:dist'],
                options: {
                    spawn: false
                }
            },
            html: {
                files: ['*.html', 'partials/*.html'],
                tasks: ['bootlint', 'includereplace', 'notify:html'],
                options: {
                    spawn: false
                }
            },
        },

        includereplace: {
            html: {
                // Files to perform replacements and includes with
                src: '*.html',
                // Destination directory to copy files to
                dest: 'dist/'
            }
        },

        csscomb: {
            dist: {
                options: {
                    config: 'grunt/csscomb.json'
                },
                expand: true,
                cwd: 'assets/sass/modules/',
                src: ['*.scss', '!_variables.scss'],
                dest: 'assets/sass/modules/',
                ext: '.scss'

            }
        },

        autoprefixer: {
            options: {
                browsers: configBridge.config.autoprefixerBrowsers
            },
            styles: {
                options: {
                    map: true
                },
                src: 'assets/css/style.css'
            }
        },

        copy: {
            dist: {
                files: [
                    {expand: true, src: ['assets/css/*'], dest: 'dist/'},
                    {expand: true, src: ['assets/fonts/**'], dest: 'dist/'},
                    {expand: true, src: ['assets/icons/**'], dest: 'dist/'},
                    {expand: true, src: ['assets/img/**'], dest: 'dist/'},
                    {expand: true, src: ['assets/js/**'], dest: 'dist/'},
                ],
            },
        },


    });

    // 3. Where we tell Grunt we plan to use this plug-in.
    grunt.loadNpmTasks('grunt-contrib-concat');
    grunt.loadNpmTasks('grunt-contrib-jshint');
    grunt.loadNpmTasks('grunt-contrib-uglify');
    grunt.loadNpmTasks('grunt-contrib-csslint');
    grunt.loadNpmTasks('grunt-contrib-cssmin');
    grunt.loadNpmTasks('grunt-bootlint');
    grunt.loadNpmTasks('grunt-contrib-copy');
    grunt.loadNpmTasks('grunt-contrib-connect');
    grunt.loadNpmTasks('grunt-contrib-watch');
    grunt.loadNpmTasks('grunt-contrib-copy');
    grunt.loadNpmTasks('grunt-notify');
    grunt.loadNpmTasks('grunt-include-replace');
    grunt.loadNpmTasks('grunt-contrib-clean');
    grunt.loadNpmTasks('grunt-autoprefixer');
    grunt.loadNpmTasks('grunt-sass');
    grunt.loadNpmTasks('grunt-html');
    grunt.loadNpmTasks('grunt-csscomb');
    grunt.loadNpmTasks("grunt-jscs");


    // 4. Where we tell Grunt what to do when we type "grunt" into the terminal.
    grunt.registerTask('default', ['clean:dist', 'htmllint:all','includereplace:html', 'jshint', 'concat:bootstrap', 'concat:dist', 'jscs', 'sass:compile', 'csscomb:dist', 'autoprefixer:styles', 'cssmin:dist', 'copy:dist', 'connect', 'notify:server', 'watch']);
    grunt.registerTask('dist', ['sass:compile', 'csscomb:dist', 'autoprefixer:styles', 'cssmin:dist', 'jscs', 'uglify', 'notify:dist']);
    grunt.registerTask('lint', ['jshint', 'csslint:strict' ]);

};