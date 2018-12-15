const {GET, POST, PUT, DELETE} = require('./constants');

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
    endpoint: '/api/v3/orders/:id',
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

const receivings = {
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
  },
};

const warehouses = {
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

const webhook = {
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

const secret = {
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

module.exports = {
  carriers,
  returns,
  orders,
  receivings,
  warehouses,
  webhook,
  secret,
};
