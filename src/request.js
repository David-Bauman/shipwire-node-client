const https = require('https');

const request = (options, body) => {
  return new Promise((resolve, reject) => {
    const req = https.request(options, res => {
      let response = '';
      res.on('data', d => {
        response += d;
      });

      res.on('end', () => {
        const {statusCode, headers} = res;

        const message = {
          response,
          statusCode,
          headers
        };

        if (statusCode >= 400) return reject(message);

        return resolve(message);
      });
    });

    if (body != null) req.write(JSON.stringify(body));

    req.end();

    req.on('error', e => reject({response: e}));
  });
};

module.exports = request;
