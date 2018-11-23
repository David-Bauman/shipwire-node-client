const {GET, POST, PUT} = require('./constants');

const carriers = {
  get: {
    endpoint: '/api/v3.1/carriers/:id',
    method: GET
  },
  list: {
    endpoint: '/api/v3.1/carriers',
    method: GET
  }
};

const returns = {
  list: {
    endpoint: '/api/v3/returns',
    method: GET
  },
  create: {
    endpoint: '/api/v3/returns',
    method: POST
  },
  get: {
    endpoint: '/api/v3/returns/:id',
    method: GET
  },
  cancel: {
    endpoint: '/api/v3/returns/:id/cancel',
    method: POST
  },
  holds: {
    endpoint: '/api/v3/returns/:id/holds',
    method: GET
  },
  contents: {
    endpoint: '/api/v3/returns/:id/items',
    method: GET
  },
  tracking: {
    endpoint: '/api/v3/returns/:id/trackings',
    method: GET
  },
  list: {
    endpoint: '/api/v3/returns/:id/labels',
    method: GET
  }
};

const orders = {
  list: {
    endpoint: '/api/v3/orders',
    method: GET
  },
  get: {
    endpoint: '/api/v3/orders/:id',
    method: GET
  },
  create: {
    endpoint: '/api/v3/orders',
    method: POST
  },
  modify: {
    endpoint: '/api/v3/orders',
    method: PUT
  },
  cancel: {
    endpoint: '/api/v3/orders/:id/cancel',
    method: GET
  },
  contents: {
    endpoint: '/api/v3/orders/:id/items',
    method: GET
  },
  holds: {
    endpoint: '/api/v3/orders/:id/holds',
    method: GET
  },
  tracking: {
    endpoint: '/api/v3/orders/:id/trackings',
    method: GET
  },
  invoice: {
    endpoint: '/api/v3/orders/:id/commercialInvoice',
    method: GET
  },
};

module.exports = {
  carriers,
  returns,
  orders
};
