module.exports = {
  res: {
    // HTTP Status
    "status": 200,
    "message": "Successful",
    "resourceLocation": "https://api.shipwire.com/api/v3/receivings/699/shipments?offset=0&limit=20&expand=all",
    "resource": {
        // List of shipment packages
        "items": [
            {
                "resource": {
                    "shipmentId": 1236,
                    "height":5,
                    "length":3,
                    "weight":33,
                    "width":4,
                    "type":"box"
                },
                "resourceLocation": "https://api.shipwire.com/api/v3/receivings/699/shipments/1236"
            },
            {
                "resource": {
                    "shipmentId": 1236,
                    "height":5,
                    "length":3,
                    "weight":33,
                    "width":4,
                    "type":"box"
                },
                "resourceLocation": "https://api.shipwire.com/api/v3/receivings/699/shipments/1237"
            }
        ],
        "next": null,
        "offset": 0,
        "previous": null,
        "total": 2
    }
}

};
