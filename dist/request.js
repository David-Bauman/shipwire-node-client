'use strict';

var https = require('https');

var request = function request(options, body) {
  return new Promise(function (resolve, reject) {
    var req = https.request(options, function (res) {
      var response = '';
      res.on('data', function (d) {
        response += d;
      });

      res.on('end', function () {
        var statusCode = res.statusCode,
            headers = res.headers;


        var message = {
          response: response,
          statusCode: statusCode,
          headers: headers
        };

        if (statusCode >= 400) return reject(message);

        return resolve(message);
      });
    });

    if (body != null) req.write(JSON.stringify(body));

    req.end();

    req.on('error', function (e) {
      return reject({ response: e });
    });
  });
};

module.exports = request;