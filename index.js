'use strict';

/**
 * Dependencies
 */

var Promise = require('pinkie-promise');
var request = require('got');


/**
 * Expose detect-gender
 */

module.exports = detectGender;


/**
 * Cache
 */

var cache = {};


/**
 * Detect gender using genderize.io API
 */

function detectGender (name) {
  if (has(cache, name)) {
    var gender = cache[name];

    return Promise.resolve(gender);
  }

  return request('https://api.genderize.io', {
    query: {
      name: name
    },
    json: true
  }).then(function (response) {
    var gender = response.body.gender;

    cache[name] = gender;

    return gender;
  });
}


/**
 * Helpers
 */

function has (obj, key) {
  return !!obj[key];
}
