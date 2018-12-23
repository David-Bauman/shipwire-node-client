const {GET, POST, PUT} = require('./../constants');

const purchaseOrders = {
  list: {
    endpoint: '/api/v3/purchaseOrders',
    method: GET
  },
  get: {
    endpoint: '/api/v3/purchaseOrders/:id',
    method: GET
  },
  create: {
    endpoint: '/api/v3/purchaseOrders',
    method: POST
  },
  modify: {
    endpoint: '/api/v3/purchaseOrders/:id',
    method: PUT
  },
  cancel: {
    endpoint: '/api/v3/purchaseOrders/:id/cancel',
    method: POST
  },
  hold: {
    endpoint: '/api/v3/purchaseOrders/:id/hold',
    method: POST
  },
  clearHold: {
    endpoint: '/api/v3/purchaseOrders/:id/hold/clear',
    method: POST
  },
  listHolds: {
    endpoint: '/api/v3/purchaseOrders/:id/holds',
    method: GET
  },
  items: {
    endpoint: '/api/v3/purchaseOrders/:id/items',
    method: GET
  },
  trackings: {
    endpoint: '/api/v3/purchaseOrders/:id/trackings',
    method: GET
  },
  orders: {
    endpoint: '/api/v3/purchaseOrders/:id/orders',
    method: GET
  },
  attributes: {
    endpoint: '/api/v3/purchaseOrders/:id/extendedAttributes',
    method: GET
  },
  approve: {
    endpoint: '/api/v3/purchaseOrders/:id/approve',
    method: POST
  },
};

module.exports = purchaseOrders;