'use strict';

var _typeof = typeof Symbol === "function" && typeof Symbol.iterator === "symbol" ? function (obj) { return typeof obj; } : function (obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; };

var qs = require('querystring');

var _require = require('./constants'),
    replaceParams = _require.replaceParams;

var request = require('./request');

function Resource(methods, state) {
  var _this = this;

  if (!(this instanceof Resource)) return new Resource(methods, state);
  Object.keys(methods).forEach(function (item) {
    var _methods$item = methods[item],
        endpoint = _methods$item.endpoint,
        method = _methods$item.method;

    _this[item] = function () {
      var args = [].slice.call(arguments);
      var body = void 0,
          query = void 0;
      if (_typeof(args[args.length - 1]) === "object") {
        var _item = args.pop();
        body = _item.body;
        query = _item.query;
      }
      var path = replaceParams(endpoint, args);
      if (query) {
        path += qs.stringify(query);
      }
      var options = {
        method: method,
        path: path,
        host: state.host,
        headers: {
          "Authorization": 'Basic ' + state.token
        }
      };
      return request(options, body);
    };
  });
}

module.exports = Resource;