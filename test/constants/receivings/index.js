const receivings = require('./../../../src/endpoints').receivings;
const {replaceParams} = require('./../../../src/constants');

let possibles = [];
const replacements = ['2', 'basdc', 'haha', 'mockingBird17'];
Object.keys(receivings).forEach(key => {
  const item = receivings[key];
  let obj = {};
  obj["name"] = key;
  obj["endpoint"] = replaceParams(item.endpoint, replacements);
  obj["method"] = item.method.toLowerCase();
  obj["params"] = replacements;
  possibles.push(obj);
});

module.exports = {
  result: {
    attributes: require('./attributes').res,
    cancel: require('./cancel').res,
    cancelLabel: require('./cancelLabel').res,
    complete: require('./complete').res,
    create: require('./create').res,
    get: require('./get').res,
    holds: require('./holds').res,
    instructions: require('./instructions').res,
    items: require('./items').res,
    labels: require('./labels').res,
    list: require('./list').res,
    modify: require('./modify').res,
    shipments: require('./shipments').res,
    trackings: require('./trackings').res,
  },
  body: {
    create: require('./create').body,
    modify: require('./modify').body,
  },
  possibles: possibles
}