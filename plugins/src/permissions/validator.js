'use strict';

const {remakeError} = require('../common/utils');

const assert = require('assert');
const vm = require('vm');

class Validator {
  constructor(str) {
    try {
      this._fn = vm.runInNewContext(str, { });
    } catch (err) {
      throw remakeError(err);
    }
    assert(typeof this._fn === 'function');
  }

  is_valid(...args) {
    return this._fn(...args);
  }
}

module.exports = Validator;