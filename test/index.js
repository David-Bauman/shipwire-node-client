const token = new Buffer.from('<username>:<password>').toString('base64');

const Shipwire = require('./../src')({token: token, beta: false});

const betaShipwire = require('./../src')({token: token, beta: true});

const nockInstance = require('nock')(/https:\/\/api\.(beta\.)?shipwire\.com/, {
  reqheaders: {
    'Authorization': `Basic ${token}`
  }
}).log(console.log);

module.exports = {
  betaShipwire,
  nockInstance,
  Shipwire
};
