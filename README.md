# Shipwire API Client for Node.js

[![Build Status](https://travis-ci.org/David-Bauman/shipwire-node-client.svg?branch=master)](https://travis-ci.org/David-Bauman/shipwire-node-client)
[![Coverage Status](https://coveralls.io/repos/github/David-Bauman/shipwire-node-client/badge.svg?branch=master)](https://coveralls.io/github/David-Bauman/shipwire-node-client?branch=master)
[![Dependency Status](https://david-dm.org/David-Bauman/shipwire-node-client.svg)](https://david-dm.org/David-Bauman/shipwire-node-client)
[![devDependency Status](https://david-dm.org/David-Bauman/shipwire-node-client/dev-status.svg)](https://david-dm.org/David-Bauman/shipwire-node-client#info=devDependencies)
![Contributions welcome](https://img.shields.io/badge/contributions-welcome-green.svg)
[![License](https://img.shields.io/badge/license-MIT-blue.svg)](https://opensource.org/licenses/MIT)
## Getting Started

### Installation

```shell
// using NPM
$ npm install --save shipwire-node-client

// using Yarn
$ yarn add shipwire-node-client
```

### Constructor

```javascript
const Shipwire = require('shipwire-node-client')({
  token: new Buffer('<username>:<password>').toString('base64'),
  beta: false
});
```

The Shipwire constructor takes an object with two fields:

- `token` - Required - a base64-encoding of your Shipwire *username:password* string. This is your username, followed by a colon (:), followed by your password.
- `beta` - Defaults to false - determines whether the host will be `api.beta.shipwire.com` (if beta evaluates to true) or `api.shipwire.com` (if beta evaluates to false)

## API

#### Syntax

Each Shipwire API endpoint can be accessed through the Shipwire object returned by the constructor. The syntax is 
```javascript
Shipwire.<resource>.<method>(<params>)
```

For example, to retrieve a list of returns the appropriate call would be: 
```javascript
Shipwire.returns.list(); // this method needs no params
```

#### Parameters

All endpoints can take parameters and many require them. The parameters an endpoint accepts are first a series of strings that will be matched to create the path ([more below](#path-replacement)). The last parameter may be an Info object, which describes the querystring and the body of the request.
```javascript
const Info = {
  body: {...}, // the body to send with the request
  pdf: Boolean, // determines whether to accept a pdf response. defaults to False
  query: {...} // the query field will be querystringified and appended to the path
};
```

The Info object is optional in some cases. If included, it can have as few as 0 and as many as all of the fields shown above.

##### Path Replacement

All parameters sent to a method, except for the last one if it is an object, will be interpreted as strings for the purpose of path replacement. Shipwire endpoints can require specific ID(s) to complete: `/api/v3/orders/:id`, the endpoint for retrieving a specific order, requires an order ID in the path. When this endpoint is called, all string parameters will be substituted in for required IDs in the path in the order provided.

```javascript
// will call '/api/v3/orders/order_id'
Shipwire.orders.get('order_id');

// will call '/api/v3/orders/order_id' and ignore 
// 'Simon' and 'Garfunkel' since there is only 1 thing in the path to replace
Shipwire.orders.get('order_id', 'Simon', 'Garfunkel');
```
#### Promises

All endpoints return a promise. 
```javascript
const Info = {
  body: {
    orderNo: "foobar1",
    externalId: "rFooBar1",
    vendorId: "567"
  },
  query: {
    extra: "information",
    for: "querystring"
  }
};

// will call '/api/v3/orders/id_of_order?extra=information&for=querystring'
Shipwire.orders.modify('id_of_order', Info).then(res => {
  console.log(res);
}).catch(err => {
  console.error(err);
});
```

## Resources and Methods

- carriers
    - [`list([Info])`](https://www.shipwire.com/w/developers/carrier/#panel-shipwire0)
    - [`get(carrierId)`](https://www.shipwire.com/w/developers/carrier/#panel-shipwire1)
- containers
    - [`list([Info])`](https://www.shipwire.com/w/developers/container/#panel-shipwire0)
    - [`create(Info)`](https://www.shipwire.com/w/developers/container/#panel-shipwire1)
    - [`modify(containerId, Info)`](https://www.shipwire.com/w/developers/container/#panel-shipwire2)
    - [`get(containerId)`](https://www.shipwire.com/w/developers/container/#panel-shipwire3)
- orders
    - [`list()`](https://www.shipwire.com/w/developers/order/#panel-shipwire0)
    - [`get(orderId)`](https://www.shipwire.com/w/developers/order/#panel-shipwire1)
    - [`create(Info)`](https://www.shipwire.com/w/developers/order/#panel-shipwire2)
    - [`modify(orderId, Info)`](https://www.shipwire.com/w/developers/order/#panel-shipwire3)
    - [`cancel(orderId)`](https://www.shipwire.com/w/developers/order/#panel-shipwire4)
    - [`contents(orderId)`](https://www.shipwire.com/w/developers/order/#panel-shipwire5)
    - [`holds(orderId [,Info])`](https://www.shipwire.com/w/developers/order/#panel-shipwire6)
    - [`getTrackings(orderId)`](https://www.shipwire.com/w/developers/order/#panel-shipwire7)
    - [`createTracking(orderId, Info)`](https://www.shipwire.com/w/developers/order/#panel-shipwire8)
    - [`invoice(orderId)`](https://www.shipwire.com/w/developers/order/#panel-shipwire9)
    - [`packingList(orderId)`](https://www.shipwire.com/w/developers/order/#panel-shipwire10)
    - [`shippingLabel(orderId)`](https://www.shipwire.com/w/developers/order/#panel-shipwire11)
    - [`splitOrders(orderId)`](https://www.shipwire.com/w/developers/order/#panel-shipwire12)
    - [`pieces(orderId)`](https://www.shipwire.com/w/developers/order/#panel-shipwire13)
    - [`attributes(orderId)`](https://www.shipwire.com/w/developers/order/#panel-shipwire14)
    - [`returns(orderId)`](https://www.shipwire.com/w/developers/order/#panel-shipwire15)
    - [`clearHold(orderId)`](https://www.shipwire.com/w/developers/order/#panel-shipwire16)
    - [`markProcessed(orderId)`](https://www.shipwire.com/w/developers/order/#panel-shipwire17)
    - [`markSubmitted(orderId)`](https://www.shipwire.com/w/developers/order/#panel-shipwire18)
    - [`markComplete(orderId)`](https://www.shipwire.com/w/developers/order/#panel-shipwire19)
    - [`generateLabels(Info)`](https://www.shipwire.com/w/developers/order/#panel-shipwire20)
    - [`labelStatus(jobId [, Info])`](https://www.shipwire.com/w/developers/order/#panel-shipwire21)
    - [`generatePackingList(Info)`](https://www.shipwire.com/w/developers/order/#panel-shipwire22)
    - [`packingListStatus(jobId [, Info])`](https://www.shipwire.com/w/developers/order/#panel-shipwire23)
- products
    - [`list([Info])`](https://www.shipwire.com/w/developers/product/#panel-shipwire0)
    - [`create(Info)`](https://www.shipwire.com/w/developers/product/#panel-shipwire1)
    - [`modifyGeneral(Info)`](https://www.shipwire.com/w/developers/product/#panel-shipwire2)
    - [`modifySpecific(productId, Info)`](https://www.shipwire.com/w/developers/product/#panel-shipwire3)
    - [`get(productId)`](https://www.shipwire.com/w/developers/product/#panel-shipwire4)
    - [`retire(Info)`](https://www.shipwire.com/w/developers/product/#panel-shipwire5)
- purchaseOrders
    - [`list([Info])`](https://www.shipwire.com/w/developers/purchaseorder/#panel-shipwire0)
    - [`get(purchaseOrderId [, Info])`](https://www.shipwire.com/w/developers/purchaseorder/#panel-shipwire1)
    - [`create(Info)`](https://www.shipwire.com/w/developers/purchaseorder/#panel-shipwire2)
    - [`modify(purchaseOrderId, Info)`](https://www.shipwire.com/w/developers/purchaseorder/#panel-shipwire3)
    - [`cancel(purchaseOrderId)`](https://www.shipwire.com/w/developers/purchaseorder/#panel-shipwire4)
    - [`hold(purchaseOrderId)`](https://www.shipwire.com/w/developers/purchaseorder/#panel-shipwire5)
    - [`clearHold(purchaseOrderId)`](https://www.shipwire.com/w/developers/purchaseorder/#panel-shipwire6)
    - [`listHolds(purchaseOrderId [, Info])`](https://www.shipwire.com/w/developers/purchaseorder/#panel-shipwire7)
    - [`items(purchaseOrderId)`](https://www.shipwire.com/w/developers/purchaseorder/#panel-shipwire8)
    - [`trackings(purchaseOrderId)`](https://www.shipwire.com/w/developers/purchaseorder/#panel-shipwire9)
    - [`orders(purchaseOrderId)`](https://www.shipwire.com/w/developers/purchaseorder/#panel-shipwire10)
    - [`attributes(purchaseOrderId)`](https://www.shipwire.com/w/developers/purchaseorder/#panel-shipwire11)
    - [`approve(purchaseOrderId)`](https://www.shipwire.com/w/developers/purchaseorder/#panel-shipwire12)
- rate
    - [`oldCreate(Info)`](https://www.shipwire.com/w/developers/rate/#panel-shipwire0)
    - [`create(Info)`](https://www.shipwire.com/w/developers/rate/#panel-shipwire1)
- receivings
    - [`list([Info])`](https://www.shipwire.com/w/developers/receiving/#panel-shipwire0)
    - [`create(Info)`](https://www.shipwire.com/w/developers/receiving/#panel-shipwire1)
    - [`get(advanceShipNoticeId [, Info])`](https://www.shipwire.com/w/developers/receiving/#panel-shipwire2)
    - [`modify(advanceShipNoticeId, Info)`](https://www.shipwire.com/w/developers/receiving/#panel-shipwire3)
    - [`cancel(advanceShipNoticeId)`](https://www.shipwire.com/w/developers/receiving/#panel-shipwire4)
    - [`cancelLabel(advanceShipNoticeId)`](https://www.shipwire.com/w/developers/receiving/#panel-shipwire5)
    - [`holds(advanceShipNoticeId [, Info])`](https://www.shipwire.com/w/developers/receiving/#panel-shipwire6)
    - [`instructions(advanceShipNoticeId)`](https://www.shipwire.com/w/developers/receiving/#panel-shipwire7)
    - [`attributes(advanceShipNoticeId)`](https://www.shipwire.com/w/developers/receiving/#panel-shipwire8)
    - [`items(advanceShipNoticeId)`](https://www.shipwire.com/w/developers/receiving/#panel-shipwire9)
    - [`shipments(advanceShipNoticeId)`](https://www.shipwire.com/w/developers/receiving/#panel-shipwire10)
    - [`trackings(advanceShipNoticeId)`](https://www.shipwire.com/w/developers/receiving/#panel-shipwire11)
    - [`labels(advanceShipNoticeId)`](https://www.shipwire.com/w/developers/receiving/#panel-shipwire12)
    - [`complete(advanceShipNoticeId)`](https://www.shipwire.com/w/developers/receiving/#panel-shipwire13)
- reports
    - [`list([Info])`](https://www.shipwire.com/w/developers/business-reports/#panel-shipwire0)
    - [`get(reportId)`](https://www.shipwire.com/w/developers/business-reports/#panel-shipwire1)
    - [`getSubscribed([Info])`](https://www.shipwire.com/w/developers/business-reports/#panel-shipwire2)
    - [`getNotSubscribed([Info])`](https://www.shipwire.com/w/developers/business-reports/#panel-shipwire3)
    - [`generated([Info])`](https://www.shipwire.com/w/developers/business-reports/#panel-shipwire4)
    - [`subscribe(reportId, Info)`](https://www.shipwire.com/w/developers/business-reports/#panel-shipwire5)
    - [`unsubscribe(reportId)`](https://www.shipwire.com/w/developers/business-reports/#panel-shipwire6)
    - [`listFrequencies()`](https://www.shipwire.com/w/developers/business-reports/#panel-shipwire7)
    - [`listSubscribers()`](https://www.shipwire.com/w/developers/business-reports/#panel-shipwire8)
- returns
    - [`list([Info])`](https://www.shipwire.com/w/developers/return/#panel-shipwire0)
    - [`create(Info)`](https://www.shipwire.com/w/developers/return/#panel-shipwire1)
    - [`get(returnId [, Info])`](https://www.shipwire.com/w/developers/return/#panel-shipwire2)
    - [`cancel(returnId [, Info])`](https://www.shipwire.com/w/developers/return/#panel-shipwire3)
    - [`holds(returnId)`](https://www.shipwire.com/w/developers/return/#panel-shipwire4)
    - [`contents(returnId)`](https://www.shipwire.com/w/developers/return/#panel-shipwire5)
    - [`tracking(returnId)`](https://www.shipwire.com/w/developers/return/#panel-shipwire6)
    - [`labels(returnId)`](https://www.shipwire.com/w/developers/return/#panel-shipwire7)
    - [`markComplete(returnId)`](https://www.shipwire.com/w/developers/return/#panel-shipwire8)
    - [`generateLabels(Info)`](https://www.shipwire.com/w/developers/return/#panel-shipwire8)
    - [`labelStatus(jobId [, Info])`](https://www.shipwire.com/w/developers/return/#panel-shipwire10)
- secret
    - [`list()`](https://www.shipwire.com/w/developers/webhook/#panel-shipwire5)
    - [`create(Info)`](https://www.shipwire.com/w/developers/webhook/#panel-shipwire6)
    - [`get(secretId)`](https://www.shipwire.com/w/developers/webhook/#panel-shipwire7)
    - [`delete(secretId)`](https://www.shipwire.com/w/developers/webhook/#panel-shipwire8)
- stock
    - [`list([Info])`](https://www.shipwire.com/w/developers/stock/#panel-shipwire0)
    - [`adjust(Info)`](https://www.shipwire.com/w/developers/stock/#panel-shipwire1)
- vendors
    - [`list([Info])`](https://www.shipwire.com/w/developers/vendor/#panel-shipwire0)
    - [`create(Info)`](https://www.shipwire.com/w/developers/vendor/#panel-shipwire1)
    - [`modify(vendorId, Info)`](https://www.shipwire.com/w/developers/vendor/#panel-shipwire2)
    - [`get(vendorId)`](https://www.shipwire.com/w/developers/vendor/#panel-shipwire3)
    - [`retire(vendorId)`](https://www.shipwire.com/w/developers/vendor/#panel-shipwire4)
    - [`attributes(vendorId)`](https://www.shipwire.com/w/developers/vendor/#panel-shipwire5)
- warehouses
    - [`list([Info])`](https://www.shipwire.com/w/developers/warehouse/#panel-shipwire0)
    - [`create(Info)`](https://www.shipwire.com/w/developers/warehouse/#panel-shipwire1)
    - [`modify(warehouseId, Info)`](https://www.shipwire.com/w/developers/warehouse/#panel-shipwire2)
    - [`get(warehouseId)`](https://www.shipwire.com/w/developers/warehouse/#panel-shipwire3)
    - [`retire(warehouseId)`](https://www.shipwire.com/w/developers/warehouse/#panel-shipwire4)
    - [`containers(warehouseId)`](https://www.shipwire.com/w/developers/warehouse/#panel-shipwire5)
    - [`carriers(warehouseId)`](https://www.shipwire.com/w/developers/warehouse/#panel-shipwire6)
    - [`addCarrier(warehouseId, Info)`](https://www.shipwire.com/w/developers/warehouse/#panel-shipwire7)
    - [`removeCarrier(warehouseId, Info)`](https://www.shipwire.com/w/developers/warehouse/#panel-shipwire8)
- webhooks
    - [`list()`](https://www.shipwire.com/w/developers/webhook/#panel-shipwire0)
    - [`create(Info)`](https://www.shipwire.com/w/developers/webhook/#panel-shipwire1)
    - [`get(webhookId)`](https://www.shipwire.com/w/developers/webhook/#panel-shipwire2)
    - [`modify(webhookId, Info)`](https://www.shipwire.com/w/developers/webhook/#panel-shipwire3)
    - [`delete(webhookId)`](https://www.shipwire.com/w/developers/webhook/#panel-shipwire4)

## Contributing
If you like this project, we'd love to have your help. Contributing doesn't necessarily mean writing code though. You can also help out by:

- Opening issues on bugs you find or new features you'd like to see
- Joining discussion on issues and pull requests
- Helping write documentation i.e. fleshing out the [Methods](#resources-and-methods)

### Updating NPM

Generally, the workflow for updating the NPM package is as follows:

0. (Optional) Open an issue and describe what you will be trying to fix: a specific bug or a new feature
1. Clone the repo to your local machine
2. Create a new branch (pick a name that clearly describes the intent)
3. Commit changes to the new branch and push to origin
4. Open a pull request with a clear description of the change - allow some time for feedback
5. Once there's a general consensus, merge the PR into master and update the npm package as needed

## To Do

- Handle (throw errors on) empty tokens in constructor?
