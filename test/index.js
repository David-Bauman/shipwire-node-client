const token = new Buffer('dbauman@returnlogic.com:bf9bd71c156c6972315a55e9dda62d97').toString('base64');

const Shipwire = require('./../src')({token: token, beta: true});

const newOrder = {
  "orderNo": "12345",
  "externalId": "r44",
  "processAfterDate": "2014-06-30T16:30:00-07:00",
  "commerceName": "The Best Commerce",
  "items": [
    {"sku": "Kitteh-Tank", "quantity": 1},
    {"sku": "Kitteh-Plane", "quantity": 1}
  ],
  "options": {"warehouseId": null},
  "shipFrom": {"company": "ReturnLogic"},
  "shipTo": {
    "email": "jmuir@returnlogic.com",
    "name": "James Muir",
    "address1": "453 Lincoln Street",
    "city": "Carlisle",
    "state": "PA",
    "postalCode": "17013",
    "country": "US",
    "isCommercial": 0,
    "isPoBox": 0
  }
};
/*
Shipwire.orders.create(newOrder)
  .then(res => console.log('success: ', res))
  .catch(rej => console.log('failure: ', rej));
*/

Shipwire.orders.list()
  .then(res => console.log('success: ', res))
  .catch(rej => console.log('failure: ', rej));
