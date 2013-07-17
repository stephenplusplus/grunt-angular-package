'use strict';

var grunt = require('grunt');

exports.contentReplace = function (test) {
  var indexFile = grunt.file.read('tmp/index.html');
  var indexFileExpected = grunt.file.read('test/fixtures/index-expected.html');

  test.equal(indexFile, indexFileExpected, 'Content was successfully replaced.');

  test.done();
};
