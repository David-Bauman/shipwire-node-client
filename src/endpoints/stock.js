const {GET, POST} = require('./../constants');

const stock = {
  list: {
    endpoint: '/api/v3/stock',
    method: GET
  },
  adjust: {
    endpoint: '/api/v3/stock/adjust',
    method: POST
  }
};

module.exports = stock;