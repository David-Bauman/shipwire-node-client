const qs = require('querystring');
const {replaceParams} = require('./constants');
const request = require('./request');

function Resource(methods, state) {
  if (!(this instanceof Resource)) return new Resource(methods, state);
  Object.keys(methods).forEach(item => {
    const {endpoint, method} = methods[item];
    this[item] = function() {
      let args = [].slice.call(arguments);
      let body, query, pdf;
      if (typeof args[args.length - 1] === "object") {
        const item = args.pop();
        body = item.body;
        query = item.query;
        pdf = item.pdf;
      }

      let path = replaceParams(endpoint, args);
      if (query) {
        path += '?' + qs.stringify(query);
      }

      let headers = {
        "Authorization": `Basic ${state.token}`
      };
      if (pdf) {
        headers['Accept'] = 'application/pdf';
      }
      
      const options = {
        headers,
        host: state.host,
        method,
        path
      };
      return request(options, body);
    }
  });
}

module.exports = Resource;