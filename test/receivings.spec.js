const {Shipwire, nockInstance} = require('.');
const {expect} = require('chai');
const {result, body} = require('./constants/receivings');

const possibles = [
  {
    name: 'list',
    endpoint: '/api/v3/receivings',
    method: 'get',
    params: '',
  },
  {
    name: 'get',
    endpoint: '/api/v3/receivings/2',
    method: 'get',
    params: '2',
  },
  {
    name: 'create',
    endpoint: '/api/v3/receivings',
    method: 'post',
    params: '',
  },
  {
    name: 'modify',
    endpoint: '/api/v3/receivings/2',
    method: 'put',
    params: '2',
  },
  {
    name: 'cancel',
    endpoint: '/api/v3/receivings/2/cancel',
    method: 'post',
    params: '2',
  },
  {
    name: 'cancelLabel',
    endpoint: '/api/v3/receivings/2/labels/cancel',
    method: 'post',
    params: '2',
  },
  {
    name: 'holds',
    endpoint: '/api/v3/receivings/2/holds',
    method: 'get',
    params: '2',
  },
  {
    name: 'instructions',
    endpoint: '/api/v3/receivings/2/instructionsRecipients',
    method: 'get',
    params: '2',
  },
  {
    name: 'attributes',
    endpoint: '/api/v3/receivings/2/extendedAttributes',
    method: 'get',
    params: '2',
  },
  {
    name: 'items',
    endpoint: '/api/v3/receivings/2/items',
    method: 'get',
    params: '2',
  },
  {
    name: 'shipments',
    endpoint: '/api/v3/receivings/2/shipments',
    method: 'get',
    params: '2',
  },
  {
    name: 'trackings',
    endpoint: '/api/v3/receivings/2/trackings',
    method: 'get',
    params: '2',
  },
  {
    name: 'labels',
    endpoint: '/api/v3/receivings/2/labels',
    method: 'get',
    params: '2',
  },
  {
    name: 'complete',
    endpoint: '/api/v3.1/receivings/2/markComplete',
    method: 'post',
    params: '2',
  },
];

describe('Receivings', function() {
  
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
        return Shipwire.receivings[current.name](current.params, req).then(({response}) => {
          return expect(JSON.parse(response)).to.deep.equal(res);
        });
      } 
      nockInstance[current.method](current.endpoint).reply(200, res);
      return Shipwire.receivings[current.name](current.params).then(({response}) => {
        expect(JSON.parse(response)).to.deep.equal(res)
      });
    });
  }
});
