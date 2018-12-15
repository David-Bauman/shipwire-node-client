module.exports = {
  res: {
    // HTTP response status
    "status": 200,
    "message": "Successful",
    // URI to the receiving's extended attributes
    "resourceLocation": "https://api.shipwire.com/api/v3/receivings/12345/extendedAttributes?offset=0&limit=20",
    "resource": {
        // Pagination: number of extended attributes in the receiving before this one
        "offset": 0,
        // Pagination: total number of extended attributes in the receiving
        "total": 1,
        "previous": null,
        "next": null,
        // List of receiving extended attributes in the response
        "items": [
            {
                "resourceLocation": null,
                "resource": {
                    "name": "manufacturingId",
                    "value": 2349802398,
                    "type": "int"
                }
            }
        ]
    }
}

};
