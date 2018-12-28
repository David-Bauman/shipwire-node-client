const stock = require('./../../../src/endpoints').stock;
const {replaceParams} = require('./../../../src/constants');

let possibles = [];
const replacements = ['javascript', 'ruby', 'graphql', 'lisp'];
Object.keys(stock).forEach(key => {
  const item = stock[key];
  let obj = {};
  obj["name"] = key;
  obj["endpoint"] = replaceParams(item.endpoint, replacements);
  obj["method"] = item.method.toLowerCase();
  obj["params"] = replacements;
  possibles.push(obj);
});

module.exports = {
  result: {
    adjust: require('./adjust').res,
    list: require('./list').res
  },
  body: {
    adjust: require('./adjust').body
  },
  possibles: possibles
}