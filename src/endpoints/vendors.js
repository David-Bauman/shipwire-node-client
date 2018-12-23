const {GET, POST, PUT} = require('./../constants');

const vendors = {
  list: {
    endpoint: '/api/v3.1/vendors',
    method: GET
  },
  create: {
    endpoint: '/api/v3.1/vendors',
    method: POST
  },
  modify: {
    endpoint: '/api/v3.1/vendors/:id',
    method: PUT
  },
  get: {
    endpoint: '/api/v3.1/vendors/:id',
    method: GET
  },
  retire: {
    endpoint: '/api/v3.1/vendors/:id/retire',
    method: POST
  },
  attributes: {
    endpoint: '/api/v3.1/vendors/:id/extendedAttributes',
    method: GET
  },
};

module.exports = vendors;