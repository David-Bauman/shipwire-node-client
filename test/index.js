const token = new Buffer('<username>:<password>').toString('base64');

const Shipwire = require('./../src')({token: token, beta: false});

const betaShipwire = require('./../src')({token: token, beta: true});

const nockInstance = require('nock')(/https:\/\/api\.(beta\.){0,1}shipwire\.com/, {
  reqheaders: {
    'Authorization': `Basic ${token}`
  }
});

module.exports = {
  betaShipwire,
  nockInstance,
  Shipwire
};
