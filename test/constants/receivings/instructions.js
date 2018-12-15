module.exports = {
  res: {
    // HTTP Status
    "status": 200,
    "message": "Successful",
    "resourceLocation": "https://api.shipwire.com/api/v3/receivings/699/instructionsRecipients?offset=0&limit=20&expand=all",
    "resource": {
        // List of instructions and recipients
        "items": [
            {
                "resource": {
                    "email": "vasilis@foo.bar",
                    "name": "Vasilis Raptakis",
                    "note": "Please handle with care"
                },
                "resourceLocation": null
            }
        ],
        "next": null,
        "offset": 0,
        "previous": null,
        "total": 1
    }
}

};
