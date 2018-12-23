'use strict';

var endpoints = require('./endpoints');
var Resource = require('./resource');

function Shipwire(_ref) {
  var _this = this;

  var token = _ref.token,
      beta = _ref.beta;

  if (!(this instanceof Shipwire)) return new Shipwire({ token: token, beta: beta });
  this.state = {
    token: token,
    host: 'api' + (beta ? '.beta.' : '.') + 'shipwire.com'
  };
  Object.keys(endpoints).forEach(function (item) {
    _this[item] = new Resource(endpoints[item], _this.state);
  });
};

module.exports = Shipwire;