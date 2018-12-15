module.exports = {
  res: {
    // HTTP Status
    "status": 200,
    "message": "Successful",
    "resourceLocation": "https://api.shipwire.com/api/v3/receivings/699/labels?offset=0&limit=20&expand=all",
    "resource": {
        // label details per packages in advance ship notice
        "items": [
            {
                "resource": {
                    "labelId": 1236,
                    "orderId":699,
                    "orderExternalId": null
                },
                "resourceLocation": null
            },
            {
                "resource": {
                    "labelId": 1237,
                    "orderId":699,
                    "orderExternalId": null
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
