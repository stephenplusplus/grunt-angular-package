/*
 * grunt-angular-package
 * https://github.com/jpedrie/grunt-angular-package
 *
 * Copyright (c) 2013 John Dennis Pedrie
 * Licensed under the MIT license.
 */

'use strict';

var grunt = require('grunt');
var path = require('path');

var regex = /((\s*|\t*)<!--\s*angular-package\s*(\S*)\s*-->)(\n|.)*(<!--\s*end-angular-package\s*-->)/i;

var inject = function(html) {
  return html.replace(regex, function(match, openTag, indent, directory, content, closeTag) {
    var scriptContents = '';

    if (!grunt.file.isDir(directory)) {
      return grunt.fail.fatal(new Error('Couldn\'t find directory: ' + directory));
    }

    grunt.file.recurse(directory, function(absPath) {
      if (path.extname(absPath) === '.js') {
        scriptContents += grunt.file.read(absPath) + indent;
      }
    });

    return openTag + indent + scriptContents + closeTag;
  });
};

// As per usual, big props to @stephenplusplus for solving all my problems. :P
module.exports = function(grunt) {
  grunt.registerMultiTask('angular-package', 'Replace the contents of a placeholder with the module manifest.', function() {
    var indexFile = this.options({ indexFile: 'app/index.html' }, this.data).indexFile;

    if (!grunt.file.exists(indexFile)) {
      return grunt.fail.fatal(new Error('Couldn\'t find your index file: ' + indexFile));
    }

    grunt.file.write(indexFile, inject(grunt.file.read(indexFile)));
 });
};
