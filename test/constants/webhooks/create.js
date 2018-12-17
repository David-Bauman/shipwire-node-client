module.exports = {
  body: {
    "topic": "orders",
    "url": "https://yourdomain.com/get/webhooks/here"
  },
  res: {
    "status": 200,
    "message": "Successful",
    "resourceLocation": "https://api.shipwire.com/api/v3/webhooks?offset=0&limit=1",
    "resource": {
      "offset": 0,
      "total": 1,
      "previous": null,
      "next": null,
      "items": [{
              "resourceLocation": "https://api.shipwire.com/api/v3/webhooks/921",
              "resource": {
                      "id": 921,
                      "topic": "stock.transition",
                      "url": "https://stephensearles.com"
              }
      }]
    }
  }
};