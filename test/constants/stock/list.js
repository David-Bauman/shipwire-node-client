module.exports = {
  res: {
    // HTTP response status
    "status": 200,
    "message": "Successful",
    "resourceLocation": "https://api.shipwire.com/api/v3/stock?offset=0&limit=20",
    "resource": {
        // Pagination: number of resources that exist before this one
        "offset": 0,
        // Pagination: number of existing resources
        "total": 2,
        // Pagination: URI of the previous resource (if any)
        "previous": null,
        // Pagination: URI of the next resource (if any)
        "next": null,
        // List of items
        "items": [
            {
                // A resource with "null" "resourceLocation" value is not accessible directly using a URL.
                "resourceLocation": null,
                "resource": {
                    // The Shipwire ID of this SKU
                    "productId": 730,
                    // An ID given to the SKU in an external system, such as the order capturing software
                    // This allows to trace SKUs before and after their handling by Shipwire
                    // What is more, Shipwire will point to the appropriate SKU if you pass this external ID as identifier
                    "productExternalId": null,
                    // The SKU value
                    "sku": "Laura-s_Pen",
                    // Is this a Bundle product? (0 = no; 1 = yes)
                    // Bundles are virtual products that consist of one or more regular products
                    "isBundle": 0,
                    // Is this an Alias to a product? (o = no; 1 = yes)
                    "isAlias": 0,
                    // The Region identifier of a warehouse
                    "warehouseRegion": "LAX1",
                    // The Shipwire warehouse ID
                    "warehouseId": 11,
                    // For user created warehouses this is the Client platform warehouse ID
                    "warehouseExternalId": null,
                    "vendorId": null,
                    "vendorExternalId": null,
                    // The number of items that Shipwire is expecting to receive from you
                    "pending": 1,
                    // The number of items ready for sale in this warehouse
                    "good": 3,
                    "reserved": 1,
                    "backordered": 2,
                    "shipping": 0,
                    "shipped": 0,
                    "creating": 0,
                    "consuming": 0,
                    "consumed": 0,
                    "created": 0,
                    "damaged": 0,
                    "returned": 0,
                    "inreview": 0,
                    // Date when new inventory will be available in the warehouse.
                    "availableDate": null,
                    // Number of items shipped recenty
                    "shippedLastDay": 0,
                    "shippedLastWeek": 0,
                    "shippedLast4Weeks": 0,
                    // Number of items ordered recently
                    "orderedLastDay": 0,
                    "orderedLastWeek": 0,
                    "orderedLast4Weeks": 0
                }
            },
            {
                "resourceLocation": null,
                "resource": {
                    "productId": 731,
                    "productExternalId": null,
                    "sku": "TwinPianos",
                    "isBundle": 0,
                    "isAlias": 0,
                    "warehouseRegion": "UK",
                    "warehouseId": 7,
                    "warehouseExternalId": null,
                    "pending": 3,
                    "good": 4,
                    "reserved": 0,
                    "backordered": 0,
                    "shipping": 0,
                    "shipped": 0,
                    "creating": 0,
                    "consuming": 0,
                    "consumed": 0,
                    "created": 0,
                    "damaged": 0,
                    "returned": 0,
                    "inreview": 0,
                    "availableDate": null,
                    "shippedLastDay": 0,
                    "shippedLastWeek": 0,
                    "shippedLast4Weeks": 0,
                    "orderedLastDay": 0,
                    "orderedLastWeek": 0,
                    "orderedLast4Weeks": 0
                }
            }
        ]
    }
  }
};