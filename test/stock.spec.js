const {expect} = require('chai');
const qs = require('querystring');
const {Shipwire, nockInstance} = require('.');
const {body, possibles} = require('./constants/stock');

describe('stock', function() {
  
  afterEach(() => expect(nockInstance.isDone()).to.be.true);

  for (let i = 0; i < possibles.length; i++) {
    let current = possibles[i];
    it(current.name, function() {
      const req = body[current.name];
      const query = {extraCondition: true};
      if (req) {
        nockInstance[current.method](current.endpoint, req).reply(400);
        return Shipwire.stock[current.name](...current.params, {body: req}).catch(r => {
          console.log(r)
        });
      }
      nockInstance[current.method](current.endpoint + "?" + qs.stringify(query)).reply(400);
      return Shipwire.stock[current.name](...current.params, {query: query, pdf: true}).catch(r => {
        console.log(r)
      });
    });
  }
});
