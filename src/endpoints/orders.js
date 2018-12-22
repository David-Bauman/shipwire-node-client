const {GET, POST, PUT} = require('./../constants');

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
  packingList: {
    endpoint: '/api/v3/orders/:id/packingList',
    method: GET
  },
  shippingLabel: {
    endpoint: '/api/v3/orders/:id/shippingLabel',
    method: GET
  },
  splitOrders: {
    endpoint: '/api/v3/orders/:id/splitOrders',
    method: GET
  },
  pieces: {
    endpoint: '/api/v3/orders/:id/pieces',
    method: GET
  },
  attributes: {
    endpoint: '/api/v3/orders/:id/extendedAttributes',
    method: GET
  },
  returns: {
    endpoint: '/api/v3/orders/:id/returns',
    method: GET
  },
  clearHold: {
    endpoint: '/api/v3/orders/:id/holds/clear',
    method: POST
  },
  markProcessed: {
    endpoint: '/api/v3/orders/:id/markProcessed',
    method: POST
  },
  markSubmitted: {
    endpoint: '/api/v3/orders/:id/markSubmitted',
    method: POST
  },
  markComplete: {
    endpoint: '/api/v3/orders/:id/markComplete',
    method: POST
  },
  generateLabels: {
    endpoint: '/api/v3.1/orders/:id/splitOrders',
    method: POST
  },
  labelStatus: {
    endpoint: '/api/v3.1/orders/:id/splitOrders',
    method: GET
  },
  generatePackingList: {
    endpoint: '/api/v3.1/orders/:id/splitOrders',
    method: POST
  },
  packingListStatus: {
    endpoint: '/api/v3.1/orders/:id/splitOrders',
    method: GET
  },
};

module.exports = orders;