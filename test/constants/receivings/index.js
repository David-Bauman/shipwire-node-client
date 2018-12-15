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
  }
}