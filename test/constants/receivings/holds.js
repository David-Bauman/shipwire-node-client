module.exports = {
  res: {
    // HTTP Status
    "status": 200,
    "message": "Successful",
    "resourceLocation": "https://api.shipwire.com/api/v3/receivings/677/holds?offset=0&limit=20&expand=all",
    "resource": {
        // List of holds on the advance ship notice
        "items": [
            {
                "resource": {
                    "id": 1730,
                    "orderId": 677,
                    "externalOrderId": null,
                    "type": "customer",
                    "description": "Ship notice is on hold pending fax of Terms of Service",
                    "appliedDate": "2014-06-11T10:22:46-07:00",
                    "clearedDate": null
                },
                "resourceLocation": null
            },
            {
                "resource": {
                    "id": 1731,
                    "orderId": 677,
                    "externalOrderId": null,
                    "type": "customer",
                    "description": "Missing tracking information",
                    "appliedDate": "2014-06-11T10:22:46-07:00",
                    "clearedDate": null
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
