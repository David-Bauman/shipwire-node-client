const token = new Buffer('somefakestuff:sdfasdf').toString('base64');

const Shipwire = require('./../src')({token: token, beta: false});

const nockInstance = require('nock')('https://api.shipwire.com', {
  reqheaders: {
    'Authorization': `Basic ${token}`
  }
});

module.exports = {
  Shipwire,
  nockInstance
};
