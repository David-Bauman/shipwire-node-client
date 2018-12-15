module.exports = {
  res: {
    // HTTP Status
    "status": 200,
    "message": "Successful",
    "resourceLocation": "https://api.shipwire.com/api/v3/receivings/699/trackings?offset=0&limit=20&expand=all",
    "resource": {
        // Tracking details per packages in advance ship notice
        "items": [
            {
                "resource": {
                    "id": 294,
                    "orderId": 699,
                    "orderExternalId": null,
                    "tracking": "0123456789",
                    "carrier": "UPS",
                    "contact": "Andrei Carr",
                    "phone": "0123456789",
                    "url": "https://wwwapps.ups.com/WebTracking/track?track=yes&trackNums=0123456789",
                    "summary": null,
                    "summaryDate": null,
                    "trackedDate": null,
                    "deliveredDate": null
                },
                "resourceLocation": "https://api.shipwire.com/api/v3/receivings/699/trackings/294"
            },
            {
                "resource": {
                    "id": 297,
                    "orderId": 699,
                    "orderExternalId": null,
                    "tracking": "1123456789",
                    "carrier": "UPS",
                    "contact": null,
                    "phone": "0123456789",
                    "url": "https://wwwapps.ups.com/WebTracking/track?track=yes&trackNums=1123456789",
                    "summary": null,
                    "summaryDate": null,
                    "trackedDate": null,
                    "deliveredDate": null
                },
                "resourceLocation": "https://api.shipwire.com/api/v3/receivings/699/trackings/297"
            }
        ],
        "next": null,
        "offset": 0,
        "previous": null,
        "total": 2
    }
}

};
