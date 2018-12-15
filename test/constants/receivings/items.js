module.exports = {
  res: {
    // HTTP Status
    "status": 200,
    "message": "Successful",
    "resourceLocation": "https://api.shipwire.com/api/v3/receivings/699/items?offset=0&limit=20&expand=all",
    "resource": {
        // List of items in the advance ship notice
        "items": [
            {
                "resource": {
                    "orderExternalId": null,
                    "orderId": 699,
                    "productExternalId": null,
                    "productId": 443,
                    "quantity": 40,
                    "sku": "Laura-s_Pen",
                    "expected": 1,
                    "pending": 1,
                    "good": 0,
                    "inReview": 0,
                    "damaged": 0
                },
                "lotControl": {
                    "resourceLocation": null,
                    "resource": {
                        "items": [
                            {
                                "resourceLocation": null,
                                "resource": {
                                    "lotId": "hgf897",
                                    "quantity": 40,
                                    "expirationDate": "2018-12-14T00:00:00-08:00"
                                }
                            }
                        ]
                    }
                },
                // Optional merchant defined key-value pairs that can be passed into Shipwire
                // through the API and used for any additional values associated with the receiving.
                "extendedAttributes": {
                    "resourceLocation": null,
                    "resource": {
                        "items": [
                            {
                                "resourceLocation": null,
                                "resource": {
                                    "name": "Wholesale Price",
                                    "value": 12.72,
                                    "type": "float"
                                }
                            }
                        ]
                    }
                },
                "resourceLocation": null
            },
            {
                "resource": {
                    "orderExternalId": null,
                    "orderId": 699,
                    "productExternalId": null,
                    "productId": 442,
                    "quantity": 40,
                    "sku": "TwinPianos",
                    "expected": 1,
                    "pending": 1,
                    "good": 0,
                    "inReview": 0,
                    "damaged": 0
                },
                "resourceLocation": null
            }
        ],
        "next": null,
        "offset": 0,
        "previous": null,
        "total": 2
    }
  }
};
