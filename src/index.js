const endpoints = require('./endpoints'); 
const Resource = require('./resource');

function Shipwire({token, beta}) {
  if (!(this instanceof Shipwire)) return new Shipwire({token, beta});
  this.state = {
    token,
    host: `api${beta ? '.beta.' : '.'}shipwire.com`,
  };
  Object.keys(endpoints).forEach(item => {
    this[item] = new Resource(endpoints[item], this.state);
  });
}

module.exports = Shipwire;
