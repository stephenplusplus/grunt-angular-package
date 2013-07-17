/*
 * grunt-angular-module
 * https://github.com/jpedrie/grunt-angular-module
 *
 * Copyright (c) 2013 John Dennis Pedrie
 * Licensed under the MIT license.
 */

'use strict';

// As per usual, big props to @stephenplusplus for solving all my problems. :P
module.exports = function(grunt) {

  var search = /((\s*|\t*)<!--\s*angular-package\s*(\S*)\s*-->)(\n|.)*(<!--\s*end-angular-package\s*-->)/i;
  grunt.registerMultiTask('angular-package', 'Replace the contents of a placeholder with the module manifest.', function() {
    var options = this.options({
      indexFile: 'app/index.html'
    }, this.data);

    var indexFileContent = grunt.file.read(options.indexFile);

    var newContent = indexFileContent.replace(search, function (match, openTag, indent, path, content, closeTag) {
      var manifestFileContent = grunt.file.read(path);
      return openTag  + indent + manifestFileContent + indent + closeTag;
    });

    grunt.file.write(options.indexFile, newContent);
 });

};
