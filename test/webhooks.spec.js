const {Shipwire, nockInstance} = require('.');
const {expect} = require('chai');
const {result, body, possibles} = require('./constants/webhooks');

describe('webhooks', function() {
  
  afterEach(() => expect(nockInstance.isDone()).to.be.true);

  let current;
  for (let i = 0; i < possibles.length; i++) {
    current = possibles[i];
    it(current.name, function() {
      res = result[current.name];
      expect(res).to.deep.equal(res);
      req = body[current.name];
      if (req) {
        nockInstance[current.method](current.endpoint, req).reply(200, res);
        return Shipwire.webhooks[current.name](...current.params, req).then(({response}) => {
          return expect(JSON.parse(response)).to.deep.equal(res);
        });
      } 
      nockInstance[current.method](current.endpoint).reply(200, res);
      return Shipwire.webhooks[current.name](...current.params).then(({response}) => {
        return expect(JSON.parse(response)).to.deep.equal(res)
      });
    });
  }
});
