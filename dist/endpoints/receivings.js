'use strict';

var _require = require('./../constants'),
    GET = _require.GET,
    POST = _require.POST,
    PUT = _require.PUT;

var receivings = {
  list: {
    endpoint: '/api/v3/receivings',
    method: GET
  },
  create: {
    endpoint: '/api/v3/receivings',
    method: POST
  },
  get: {
    endpoint: '/api/v3/receivings/:id',
    method: GET
  },
  modify: {
    endpoint: '/api/v3/receivings/:id',
    method: PUT
  },
  cancel: {
    endpoint: '/api/v3/receivings/:id/cancel',
    method: POST
  },
  cancelLabel: {
    endpoint: '/api/v3/receivings/:id/labels/cancel',
    method: POST
  },
  holds: {
    endpoint: '/api/v3/receivings/:id/holds',
    method: GET
  },
  instructions: {
    endpoint: '/api/v3/receivings/:id/instructionsRecipients',
    method: GET
  },
  attributes: {
    endpoint: '/api/v3/receivings/:id/extendedAttributes',
    method: GET
  },
  items: {
    endpoint: '/api/v3/receivings/:id/items',
    method: GET
  },
  shipments: {
    endpoint: '/api/v3/receivings/:id/shipments',
    method: GET
  },
  trackings: {
    endpoint: '/api/v3/receivings/:id/trackings',
    method: GET
  },
  labels: {
    endpoint: '/api/v3/receivings/:id/labels',
    method: GET
  },
  complete: {
    endpoint: '/api/v3.1/receivings/:id/markComplete',
    method: POST
  }
};

module.exports = receivings;