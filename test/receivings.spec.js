const {expect} = require('chai');
const {Shipwire, nockInstance} = require('.');
const {result, body, possibles} = require('./constants/receivings');

describe('Receivings', function() {
  
  afterEach(() => expect(nockInstance.isDone()).to.be.true);

  let current;
  for (let i = 0; i < possibles.length; i++) {
    current = possibles[i];
    it(current.name, function() {
      const res = result[current.name];
      const req = body[current.name];
      if (req) {
        nockInstance[current.method](current.endpoint, req).reply(200, res);
        return Shipwire.receivings[current.name](...current.params, req).then(({response}) => {
          return expect(JSON.parse(response)).to.deep.equal(res);
        });
      } 
      nockInstance[current.method](current.endpoint).reply(200, res);
      return Shipwire.receivings[current.name](...current.params).then(({response}) => {
        return expect(JSON.parse(response)).to.deep.equal(res)
      });
    });
  }
});
