module.exports = {
  body: {
    "topic": "orders.created",
    "url": "https://yourdomain.com/get/webhooks/here"
  },
  res: {
    "status": 200,
    "message": "Successful",
    "resourceLocation": "https://api.shipwire.com/api/v3/webhooks/882",
    "resource": {
            "id": 882,
            "topic": "v1.stock.transition",
            "url": "https://stephensearles.com/"
    }
  }
};