const {GET, POST, PUT} = require('./../constants');

const containers = {
  list: {
    endpoint: '/api/v3.1/containers',
    method: GET
  },
  create: {
    endpoint: '/api/v3.1/containers',
    method: POST
  },
  modify: {
    endpoint: '/api/v3.1/containers/:id',
    method: PUT
  },
  get: {
    endpoint: '/api/v3.1/containers/:id',
    method: GET
  }
};

module.exports = containers;