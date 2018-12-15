// not 100% sure - the Shipwire documentation is quite sparse

module.exports = {
  res: {
    // HTTP Response status
    "status": 200,
    "message": "Successful",
    "resourceLocation": "https://api.shipwire.com/api/v3/receivings/699",
    "resource": {
        // ID for this advance ship notice
        "id": 699,
        // ID for this advance ship notice in client platform
        "externalId": null,
        "orderNo": "foobar1",
        "transactionId": "1401201560",
        // Date when goods are expected to arrive at Shipwire storage
        "expectedDate": "2014-05-27T00:00:00-07:00",
        "commerceName": "Shipwire",
        "lastUpdatedDate": "2014-05-27T00:00:00-07:00",
        "status":"completed",
        // Holds that apply to this advance ship notice
        "holds": {"resourceLocation": "https://api.shipwire.com/api/v3/receivings/673/holds?offset=0&limit=20&expand=all"},
        // Items being shipped to Shipwire.  See `items` resource.
        "items": {"resourceLocation": "https://api.shipwire.com/api/v3/receivings/673/items?offset=0&limit=20&expand=all"},
        // Specifies shipment tracking details. See `trackings` resource.
        "trackings": { "resourceLocation": "https://api.shipwire.com/api/v3/receivings/673/trackings?offset=0&limit=20&expand=all" },
        // Specifies goods details. See `shipment` resource.
        "shipments": { "resourceLocation": "https://api.shipwire.com/api/v3/receivings/673/shipments?offset=0&limit=20&expand=all" },
        // Specifies shipment label details. see `labels` resource.
        "labels": { "resourceLocation": "https://api.shipwire.com/api/v3/receivings/673/labels?offset=0&limit=20&expand=all" },
        // Advance ship notice configuration
        "options": {
            "resource": {
                // Specify the warehouse where items are being shipped
                "warehouseExternalId": null,
                "warehouseId": 7,
                "warehouseRegion": "UK"
            },
            "resourceLocation": null
        },
        // The arrangement type will tell Shipwire what further actions to
        // take once the advance ship notice is created.
        // Valid options are:
        // - "none": No Shipwire intervention. Merchant will mail items autonomously.
        // - "overseas": A special project will be created. Please provide "contact" and "phone".
        // - "label": Shipwire will generate shipping labels (not yet supported via API)
        // - "pickup": Shipwire will arrange carrier pickup (not yet supported via API)
        "arrangement": {
            "contact": "",
            "phone": "",
            "type": "none"
        },
        // Shipping source information
        "shipFrom": {
            "resource": {
                "address1": "11 Prsilla St",
                "address2": null,
                "address3": null,
                "city": "Schenectady",
                "country": "United States",
                "email": "shipping@wesellem.co",
                "name": "Stephen Alexander",
                "phone": "1234567890",
                "postalCode": "12345",
                "state": "NY"
            },
            "resourceLocation": null
        },
        // Events registered to this advance ship notice
        "events": {
            "resource": {
                "cancelledDate": null,
                "completedDate": "2014-05-27T17:39:35-07:00",
                "createdDate": "2014-05-27T07:39:20-07:00",
                "deliveredDate": null,
                "expectedDate": "2014-05-27T00:00:00-07:00",
                "lastManualUpdateDate": null,
                "pickedUpDate": null,
                "processedDate": "2014-05-27T07:39:20-07:00",
                "returnedDate": null,
                "submittedDate": "2014-05-27T17:39:35-07:00"
            },
            "resourceLocation": null
        },
        // Package routing details
        "routing": {
            "resource": {
                "originLatitude": 0.12776,
                "originLongitude": 50.9118,
                "warehouseExternalId": null,
                "warehouseId": 7,
                "warehouseName": "UK",
                "warehouseRegion": "UK"
            },
            "resourceLocation": null
        },
        // List of contacts and instructions to send to each of them
        "instructionsRecipients": {"resourceLocation": "https://api.shipwire.com/api/v3/receivings/673/instructionsRecipients?offset=0&limit=20&expand=all"},
        // See extended attributes resource
        "extendedAttributes": {"resourceLocation": "https://api.shipwire.com/api/v3/receivings/673/extendedAttributes?offset=0&limit=20&expand=all"}
    }
  },
  body: {
    // ID for this advance ship notice in client platform
    "externalId":"ClientID123456",
    // Date when goods are expected to arrive at Shipwire storage
    "expectedDate": "2014-05-27T00:00:00-07:00",
    // Warehouse configuration
    "options":{
        "warehouseRegion":"LAX"
    },
    // The arrangement type will tell Shipwire what further actions to
    // take once the advance ship notice is created.
    // Valid options are:
    // - "none": No Shipwire intervention. Merchant will mail items autonomously.
    // - "overseas": A special project will be created. Please provide "contact" and "phone".
    // - "label": Shipwire will generate shipping labels (not yet supported via API)
    // - "pickup": Shipwire will arrange carrier pickup (not yet supported via API)
    "arrangement":{
        "type":"none",
        "contact":"George",
        "phone":"1239999111"
    },
    // Specifies shipment packages. See `shipments` resource.
    "shipments":[
        {
            "length":18,
            "width":9,
            "height":7,
            "weight":33,
            "type":"box"
        },
        {
            "length":18,
            "width":9,
            "height":57,
            "weight":33,
            "type":"box"
        }
    ],
    // labels details for shipment. See `labels` resource.
    "labels":[
        {
            "labelId":"2345",
            "orderId":"12345",
            "orderExernalId":"null"
        }
    ],
    // Tracking details for shipment. See `trackings` resource.
    "trackings":[
        {
            "tracking":"UPS9654123574",
            "carrier":"UPS",
            "contact":"Stephen Alexander",
            "phone":"3219999111"
        }
    ],
    // List of items to be sent
    "items":[
        {
            // Item's SKU
            "sku": "Laura-s_Pen",
            // Number of items to ship
            "quantity": 40,
            // Optional merchant defined key-value pairs that can be passed into Shipwire
            // through the API and used for any additional values associated with the receiving item.
            "extendedAttributes":[
                {
                    "name": "model",
                    "value": "J44892",
                    "type": "string"
                }
            ]
        },
        {
            "sku": "TwinPianos",
            "quantity": 40
        }
    ],
    // Shipping source
    "shipFrom":{
        "email": "shipping@wesellem.co",
        "name": "Stephen Alexander",
        "address1": "11 Prsilla St",
        "city": "Schenectady",
        "state": "NY",
        "postalCode": "12345",
        "country": "United States",
        "phone": "1234567890"
    },
    // List of contacts and instructions to send to each of them.
    // Shipwire will email the provided contacts with advance ship notice procedure instructions.
    "instructionsRecipients":[
        {
            "email":"vasilis@foo.bar",
            "name":"Vasilis Raptakis",
            "note":"Please handle with care"
        }
    ],
    // Optional merchant defined key-value pairs that can be passed into Shipwire
    // through the API and used for any additional values associated with the receiving.
    "extendedAttributes":[
        {
            "name": "returnInstruction",
            "value": "Mail in or store",
            "type": "string"
        },
        {
            "name": "manufacturingId",
            "value": 2349802398,
            "type": "int"
        }
    ]
  }
};
