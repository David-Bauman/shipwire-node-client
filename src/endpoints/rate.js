const {POST} = require('./../constants');

const rate = {
  oldCreate: {
    endpoint: '/api/v3/rate',
    method: POST
  },
  create: {
    endpoint: '/api/v3.1/rate',
    method: POST
  }
};

module.exports = rate;