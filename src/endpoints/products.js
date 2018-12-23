const {GET, POST, PUT} = require('./../constants');

const products = {
  list: {
    endpoint: '/api/v3/products',
    method: GET
  },
  create: {
    endpoint: '/api/v3/products',
    method: POST
  },
  modifyGeneral: {
    endpoint: '/api/v3/products',
    method: PUT
  },
  modifySpecific: {
    endpoint: '/api/v3/products/:id',
    method: PUT
  },
  get: {
    endpoint: '/api/v3/products/:id',
    method: GET
  },
  retire: {
    endpoint: '/api/v3/products/retire',
    method: POST
  }
};

module.exports = products;