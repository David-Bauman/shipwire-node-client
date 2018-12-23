'use strict';

var _require = require('./../constants'),
    GET = _require.GET,
    POST = _require.POST,
    DELETE = _require.DELETE;

var secret = {
  list: {
    endpoint: '/api/v3/secret',
    method: GET
  },
  create: {
    endpoint: '/api/v3/secret',
    method: POST
  },
  get: {
    endpoint: '/api/v3/secret/:id',
    method: GET
  },
  delete: {
    endpoint: '/api/v3/secret/:id',
    method: DELETE
  }
};

module.exports = secret;