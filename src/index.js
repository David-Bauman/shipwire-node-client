const endpoints = require('./endpoints'); 
const Resource = require('./resource');

const authError = new Error ('No authentication method passed in. Pass in either a token or both a username and a password.');

function Shipwire(params) {
  if (!(this instanceof Shipwire)) return new Shipwire(params);
  if (typeof params !== 'object') throw authError;

  const {token, beta, username, password} = params;
  this.state = {
    host: `api${beta ? '.beta.' : '.'}shipwire.com`
  };
  if (token) {
    this.state['token'] = token;
  } else if (username && password) {
    this.state['token'] = new Buffer.from(`${username}:${password}`).toString('base64');
  } else {
    throw authError;
  }

  Object.keys(endpoints).forEach(item => {
    this[item] = new Resource(endpoints[item], this.state);
  });
}

module.exports = Shipwire;
