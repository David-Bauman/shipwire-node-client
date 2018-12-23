'use strict';

var _require = require('./../constants'),
    GET = _require.GET;

var carriers = {
  get: {
    endpoint: '/api/v3.1/carriers/:id',
    method: GET
  },
  list: {
    endpoint: '/api/v3.1/carriers',
    method: GET
  }
};

module.exports = carriers;