'use strict';

var grunt = require('grunt');

exports.contentReplace = {
  fresh: function(test) {
    var indexFile = grunt.file.read('tmp/index-fresh.html');
    var indexFileExpected = grunt.file.read('test/fixtures/index-expected.html');

    test.equal(indexFile, indexFileExpected);

    test.done();
  },
  overwrite: function(test) {
    var indexFile = grunt.file.read('tmp/index-overwrite.html');
    var indexFileExpected = grunt.file.read('test/fixtures/index-expected.html');

    test.equal(indexFile, indexFileExpected);

    test.done();
  }
};
