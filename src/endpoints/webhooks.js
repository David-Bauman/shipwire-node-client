const {GET, POST, PUT, DELETE} = require('./../constants');

const webhooks = {
  list: {
    endpoint: '/api/v3/webhooks',
    method: GET
  },
  create: {
    endpoint: '/api/v3/webhooks',
    method: POST
  },
  get: {
    endpoint: '/api/v3/webhooks/:id',
    method: GET
  },
  modify: {
    endpoint: '/api/v3/webhooks/:id',
    method: PUT
  },
  delete: {
    endpoint: '/api/v3/webhooks/:id',
    method: DELETE
  }
};

module.exports = webhooks;