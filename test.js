'use strict';

/**
 * Dependencies
 */

const hrtime = require('pretty-hrtime');
const expect = require('chai').expect;
const detect = require('./');

require('mocha-generators').install();


/**
 * Tests
 */

describe ('detect-gender', function () {

  it ('query genderize.io API', function * () {
    let gender = yield detect('vadim');

    // would be sad, if that test failed
    expect(gender).equal('male');
  });

  it ('return gender from cache', function * () {
    // measure time for fetching result
    // if less than a millisecond, was from cache
    // not sexy, but works
    let start = process.hrtime();

    let gender = yield detect('vadim');

    let diff = process.hrtime(start);

    expect(hrtime(diff)).match(/μs/);

    expect(gender).equal('male');
  });

});
