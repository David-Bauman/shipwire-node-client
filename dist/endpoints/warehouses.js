'use strict';

var _require = require('./../constants'),
    GET = _require.GET,
    POST = _require.POST,
    PUT = _require.PUT;

var warehouses = {
  list: {
    endpoint: '/api/v3.1/warehouses',
    method: GET
  },
  create: {
    endpoint: '/api/v3.1/warehouses',
    method: POST
  },
  modify: {
    endpoint: '/api/v3.1/warehouses/:id',
    method: PUT
  },
  get: {
    endpoint: '/api/v3.1/warehouses/:id',
    method: GET
  },
  retire: {
    endpoint: '/api/v3.1/warehouses/:id/retire',
    method: POST
  },
  containers: {
    endpoint: '/api/v3.1/warehouses/:id/containers',
    method: GET
  },
  carriers: {
    endpoint: '/api/v3.1/warehouses/:id/carriers',
    method: GET
  },
  addCarrier: {
    endpoint: '/api/v3.1/warehouses/:id/addCarriers',
    method: POST
  },
  removeCarrier: {
    endpoint: '/api/v3.1/warehouses/:id/removeCarriers',
    method: POST
  }
};

module.exports = warehouses;