const {GET, POST, PUT} = require('./../constants');

const reports = {
  list: {
    endpoint: '/api/v3/reports',
    method: GET
  },
  get: {
    endpoint: '/api/v3/reports/:id',
    method: GET
  },
  getSubscribed: {
    endpoint: '/api/v3/reports/subscribed',
    method: GET
  },
  getNotSubscribed: {
    endpoint: '/api/v3/reports/notSubscribed',
    method: GET
  },
  generated: {
    endpoint: '/api/v3/reports/pastGenerated',
    method: GET
  },
  subscribe: {
    endpoint: '/api/v3/reports/:id',
    method: PUT
  },
  unsubscribe: {
    endpoint: '/api/v3/reports/unsubscribe/:id',
    method: POST
  },
  listFrequencies: {
    endpoint: '/api/v3/reports/frequencies',
    method: GET
  },
  listSubscribers: {
    endpoint: '/api/v3/reports/subscribers',
    method: GET
  },
};

module.exports = reports;