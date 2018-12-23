# Shipwire API Client for Node.js

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
  query: {...}, // the query field will be querystringified and appended to the path
  body: {...} // the body to send with the request
};
```

The Info object is optional as well as either field.

##### Path Replacement

All parameters sent to a method, except for the last one if it is an object, will be interpreted as strings for the purpose of path replacement. Shipwire endpoints can require specific ID(s) to complete: `/api/v3/orders/:id`, the endpoint for retrieving a specific order, requires an order ID in the path. When this endpoint is called, all string parameters will be substituted in for required IDs in the path in the order provided.

```javascript
Shipwire.orders.get('order_id'); // will call /api/v3/orders/order_id

Shipwire.orders.get('order_id', 'Simon', 'Garfunkel'); // will call /api/v3/orders/order_id and ignore 'Simon' and 'Garfunkel' since there is only 1 thing in the path to replace
```
#### Promises

All endpoints return a promise. 
```javascript
const Info = {
  body: {
    "orderNo": "foobar1",
    "externalId": "rFooBar1",
    "vendorId": "567",
    ...
  }
};
Shipwire.orders.modify('<id_of_order>', Info).then(res => {
  console.log(res);
}).catch(err => {
  console.error(err);
});
```

## Resources and Methods

- carriers
    - [`list([Info])`](https://www.shipwire.com/w/developers/carrier/#panel-shipwire0)
    - [`get(carrierId)`](https://www.shipwire.com/w/developers/carrier/#panel-shipwire1)
- orders
    - [`list()`](https://www.shipwire.com/w/developers/order/#panel-shipwire0)
    - [`get(id)`](https://www.shipwire.com/w/developers/order/#panel-shipwire1)
    - [`create(Info)`](https://www.shipwire.com/w/developers/order/#panel-shipwire2)
    - [`modify(id, Info)`](https://www.shipwire.com/w/developers/order/#panel-shipwire3)
    - [`cancel(id)`](https://www.shipwire.com/w/developers/order/#panel-shipwire4)
    - [`contents(id)`](https://www.shipwire.com/w/developers/order/#panel-shipwire5)
    - [`holds(id [,Info])`](https://www.shipwire.com/w/developers/order/#panel-shipwire6)
    - [`getTrackings(id)`](https://www.shipwire.com/w/developers/order/#panel-shipwire7)
    - [`createTracking(id, Info)`](https://www.shipwire.com/w/developers/order/#panel-shipwire8)
    - [`invoice(id)`](https://www.shipwire.com/w/developers/order/#panel-shipwire9)
    - [`packingList(id)`](https://www.shipwire.com/w/developers/order/#panel-shipwire10)
    - [`shippingLabel(id)`](https://www.shipwire.com/w/developers/order/#panel-shipwire11)
    - [`splitOrders(id)`](https://www.shipwire.com/w/developers/order/#panel-shipwire12)
    - [`pieces(id)`](https://www.shipwire.com/w/developers/order/#panel-shipwire13)
    - [`attributes(id)`](https://www.shipwire.com/w/developers/order/#panel-shipwire14)
    - [`returns(id)`](https://www.shipwire.com/w/developers/order/#panel-shipwire15)
    - [`clearHold(id)`](https://www.shipwire.com/w/developers/order/#panel-shipwire16)
    - [`markProcessed(id)`](https://www.shipwire.com/w/developers/order/#panel-shipwire17)
    - [`markSubmitted(id)`](https://www.shipwire.com/w/developers/order/#panel-shipwire18)
    - [`markComplete(id)`](https://www.shipwire.com/w/developers/order/#panel-shipwire19)
    - [`generateLabels(Info)`](https://www.shipwire.com/w/developers/order/#panel-shipwire20)
    - [`labelStatus(id [, Info])`](https://www.shipwire.com/w/developers/order/#panel-shipwire21)
    - [`generatePackingList(Info)`](https://www.shipwire.com/w/developers/order/#panel-shipwire22)
    - [`packingListStatus(id [, Info])`](https://www.shipwire.com/w/developers/order/#panel-shipwire23)
- receivings
    - [`list([Info])`](https://www.shipwire.com/w/developers/receiving/#panel-shipwire0)
    - [`create(Info)`](https://www.shipwire.com/w/developers/receiving/#panel-shipwire1)
    - [`get(id [, Info])`](https://www.shipwire.com/w/developers/receiving/#panel-shipwire2)
    - [`modify(id, Info)`](https://www.shipwire.com/w/developers/receiving/#panel-shipwire3)
    - [`cancel(id)`](https://www.shipwire.com/w/developers/receiving/#panel-shipwire4)
    - [`cancelLabel(id)`](https://www.shipwire.com/w/developers/receiving/#panel-shipwire5)
    - [`holds(id [, Info])`](https://www.shipwire.com/w/developers/receiving/#panel-shipwire6)
    - [`instructions(id)`](https://www.shipwire.com/w/developers/receiving/#panel-shipwire7)
    - [`attributes(id)`](https://www.shipwire.com/w/developers/receiving/#panel-shipwire8)
    - [`items(id)`](https://www.shipwire.com/w/developers/receiving/#panel-shipwire9)
    - [`shipments(id)`](https://www.shipwire.com/w/developers/receiving/#panel-shipwire10)
    - [`trackings(id)`](https://www.shipwire.com/w/developers/receiving/#panel-shipwire11)
    - [`labels(id)`](https://www.shipwire.com/w/developers/receiving/#panel-shipwire12)
    - [`complete(id)`](https://www.shipwire.com/w/developers/receiving/#panel-shipwire13)
- returns
    - [`list([Info])`](https://www.shipwire.com/w/developers/return/#panel-shipwire0)
    - [`create(Info)`](https://www.shipwire.com/w/developers/return/#panel-shipwire1)
    - [`get(id [, Info])`](https://www.shipwire.com/w/developers/return/#panel-shipwire2)
    - [`cancel(id [, Info])`](https://www.shipwire.com/w/developers/return/#panel-shipwire3)
    - [`holds(id)`](https://www.shipwire.com/w/developers/return/#panel-shipwire4)
    - [`contents(id)`](https://www.shipwire.com/w/developers/return/#panel-shipwire5)
    - [`tracking(id)`](https://www.shipwire.com/w/developers/return/#panel-shipwire6)
    - [`labels(id)`](https://www.shipwire.com/w/developers/return/#panel-shipwire7)
    - [`markComplete(id)`](https://www.shipwire.com/w/developers/return/#panel-shipwire8)
    - [`generateLabels(Info)`](https://www.shipwire.com/w/developers/return/#panel-shipwire8)
    - [`labelStatus(id [, Info])`](https://www.shipwire.com/w/developers/return/#panel-shipwire10)
- secret
    - [`list()`](https://www.shipwire.com/w/developers/webhook/#panel-shipwire5)
    - [`create(Info)`](https://www.shipwire.com/w/developers/webhook/#panel-shipwire6)
    - [`get(id)`](https://www.shipwire.com/w/developers/webhook/#panel-shipwire7)
    - [`delete(id)`](https://www.shipwire.com/w/developers/webhook/#panel-shipwire8)
- warehouses
    - [`list([Info])`](https://www.shipwire.com/w/developers/warehouse/#panel-shipwire0)
    - [`create(Info)`](https://www.shipwire.com/w/developers/warehouse/#panel-shipwire1)
    - [`modify(id, Info)`](https://www.shipwire.com/w/developers/warehouse/#panel-shipwire2)
    - [`get(id)`](https://www.shipwire.com/w/developers/warehouse/#panel-shipwire3)
    - [`retire(id)`](https://www.shipwire.com/w/developers/warehouse/#panel-shipwire4)
    - [`containers(id)`](https://www.shipwire.com/w/developers/warehouse/#panel-shipwire5)
    - [`carriers(id)`](https://www.shipwire.com/w/developers/warehouse/#panel-shipwire6)
    - [`addCarrier(id, Info)`](https://www.shipwire.com/w/developers/warehouse/#panel-shipwire7)
    - [`removeCarrier(id, Info)`](https://www.shipwire.com/w/developers/warehouse/#panel-shipwire8)
- webhooks
    - [`list()`](https://www.shipwire.com/w/developers/webhook/#panel-shipwire0)
    - [`create(Info)`](https://www.shipwire.com/w/developers/webhook/#panel-shipwire1)
    - [`get(id)`](https://www.shipwire.com/w/developers/webhook/#panel-shipwire2)
    - [`modify(id, Info)`](https://www.shipwire.com/w/developers/webhook/#panel-shipwire3)
    - [`delete(id)`](https://www.shipwire.com/w/developers/webhook/#panel-shipwire4)


## To Do

- Give option for accept PDF headers (part of Info?), update README
- Add Purchase Order, Container, Address Validation, Stock, Business Reports, Rate, Product, Vendor endpoints
- Specify what type of ID for each in [Resources and Methods](#resources-and-methods)
- Handle (throw errors on) empty tokens in constructor?
