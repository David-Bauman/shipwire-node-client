const {expect} = require('chai');

// this test uses Shipwire with beta flag (all requests would go to api.beta.shipwire.com)
const {betaShipwire, nockInstance} = require('.');
const {result, body, possibles} = require('./constants/receivings');

describe('Receivings', function() {
  
  afterEach(() => expect(nockInstance.isDone()).to.be.true);

  for (let i = 0; i < possibles.length; i++) {
    let current = possibles[i];
    it(current.name, function() {
      const res = result[current.name];
      const req = body[current.name];
      if (req) {
        nockInstance[current.method](current.endpoint, req).reply(200, res);
        return betaShipwire.receivings[current.name](...current.params, {body: req}).then(({response}) => {
          return expect(JSON.parse(response)).to.deep.equal(res);
        });
      } 
      nockInstance[current.method](current.endpoint).reply(200, res);
      return betaShipwire.receivings[current.name](...current.params).then(({response}) => {
        return expect(JSON.parse(response)).to.deep.equal(res)
      });
    });
  }
});
