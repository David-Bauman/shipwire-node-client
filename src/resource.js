const {replaceParams} = require('./constants');
const request = require('./request');

function Resource(methods, state) {
  if (!(this instanceof Resource)) return new Resource(methods, state);
  Object.keys(methods).forEach(item => {
    const {endpoint, method} = methods[item];
    this[item] = function() {
      let args = [].slice.call(arguments);
      let body;
      if (typeof args[args.length - 1] === "object") body = args.pop();
      const path = replaceParams(endpoint, args);
      const options = {
        method,
        path,
        host: state.host,
        headers: {
          "Authorization": `Basic ${state.token}`
        }
      };
      return request(options, body);
    }
  });
}

module.exports = Resource;