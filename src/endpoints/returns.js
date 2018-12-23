const {GET, POST} = require('./../constants');

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
  labels: {
    endpoint: '/api/v3/returns/:id/labels',
    method: GET
  },
  markComplete: {
    endpoint: '/api/v3.1/returns/:id/markComplete',
    method: POST
  },
  generateLabels: {
    endpoint: '/api/v3.1/returns/generateLabels',
    method: POST
  },
  labelStatus: {
    endpoint: '/api/v3.1/returns/generateLabels/:id',
    method: GET
  }
};

module.exports = returns;