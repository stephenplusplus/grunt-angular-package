/*
 * grunt-angular-package
 * https://github.com/jpedrie/grunt-angular-package
 *
 * Copyright (c) 2013 John Dennis Pedrie
 * Licensed under the MIT license.
 */

'use strict';

module.exports = function(grunt) {

  // Project configuration.
  grunt.initConfig({
    jshint: {
      all: [
        'Gruntfile.js',
        'tasks/*.js',
        '<%= nodeunit.tests %>',
      ],
      options: {
        jshintrc: '.jshintrc',
      },
    },

    // Before generating any new files, remove any previously-created files.
    clean: {
      tests: ['tmp'],
    },

    copy: {
      test: {
        expand: true,
        cwd: 'test/fixtures/',
        src: '**/*',
        dest: 'tmp/'
      }
    },

    // Unit tests.
    nodeunit: {
      tests: ['test/*-test.js'],
    },

    'angular-package': {
      fresh: {
        indexFile: 'tmp/index-fresh.html'
      },
      overwrite: {
        indexFile: 'tmp/index-overwrite.html'
      }
    },

  });

  // Actually load this plugin's task(s).
  grunt.loadTasks('tasks');

  // These plugins provide necessary tasks.
  grunt.loadNpmTasks('grunt-contrib-jshint');
  grunt.loadNpmTasks('grunt-contrib-clean');
  grunt.loadNpmTasks('grunt-contrib-copy');
  grunt.loadNpmTasks('grunt-contrib-nodeunit');

  // Whenever the "test" task is run, first clean the "tmp" dir, then run this
  // plugin's task(s), then test the result.
  grunt.registerTask('test', ['clean', 'copy', 'angular-package', 'nodeunit']);

  // By default, lint and run all tests.
  grunt.registerTask('default', ['jshint', 'test']);

};
