const webhooks = require('./../../../src/endpoints').webhooks;
const {replaceParams} = require('./../../../src/constants');

let possibles = [];
const replacements = ['2', 'basdc', 'haha', 'mockingBird17'];
Object.keys(webhooks).forEach(key => {
  const item = webhooks[key];
  let obj = {};
  obj["name"] = key;
  obj["endpoint"] = replaceParams(item.endpoint, replacements);
  obj["method"] = item.method.toLowerCase();
  obj["params"] = replacements;
  possibles.push(obj);
});

module.exports = {
  result: {
    create: require('./create').res,
    delete: require('./delete').res,
    get: require('./get').res,
    list: require('./list').res,
    modify: require('./modify').res,
  },
  body: {
    get: require('./get').body,
    modify: require('./modify').body,
  },
  possibles: possibles
}