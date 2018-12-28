module.exports = {
  res: {
    // HTTP response status
    "status": 200,
    "message": "Successful",
    "resourceLocation": null,
    "resource": {
        // Pagination: number of resources that exist before this one
        "offset": 0,
        // Pagination: number of existing resources
        "total": 1,
        // Pagination: URI of the previous resource (if any)
        "previous": null,
        // Pagination: URI of the next resource (if any)
        "next": null,
        // List of items
        "items": [{
            // A resource with "null" "resourceLocation" value is not accessible directly using a URL.
            "resourceLocation": null,
            "resource": {
                "productId": 7191,
                "productExternalId": "BP1EIDcv73lpsb",
                "vendorId": null,
                "vendorExternalId": null,
                "sku": "BP1s1ud0b9j",
                "isBundle": 0,
                "isAlias": 0,
                "warehouseRegion": "SASTA1",
                "warehouseId": 5661,
                "physicalWarehouseId": null,
                "warehouseExternalId": "WH1EIDyb5i",
                // The number of items that Shipwire is expecting to receive from you.
                "pending": 0,
                // The number of items ready for sale in this warehouse.
                "good": 100,
                // The number of items reserved as part of pending orders in this warehouse.
                "reserved": 0,
                // The number of items currently in backorder in this warehouse.
                "backordered": 0,
                "shipping": 0,
                "shipped": 0,
                "creating": 0,
                "consuming": 0,
                "consumed": null,
                "created": 0,
                "damaged": 0,
                "returned": 0,
                "inreview": 0,
                // Date when new inventory will be available in the warehouse.
                "availableDate": null,
                // Number of items shipped recenty.
                "shippedLastDay": 0,
                "shippedLastWeek": 0,
                "shippedLast4Weeks": 0,
                // Number of items ordered recently.
                "orderedLastDay": 0,
                "orderedLastWeek": 0,
                "orderedLast4Weeks": 0
                }
            }]
        }
  },
  body: {
    // One of warehouseId, warehouseExternalId is required.Indicates which warehouse's inventory will be adjusted
    "warehouseId": null,
    // Limit warehouseExternalId to 32 characters.
    "warehouseExternalId": null,
    // Inventory adjustment reason, limit the reason to 64 characters.
    "reason": "received new inventory",
    // One of productId, productExternalId, sku is required. 
    // Indicates which SKU's inventory will be adjusted.
    "sku": "Laura-s_Pen",
    // Indicates which ProductId's inventory will be adjusted.
    "productId": "12401",
    // Indicates which ExternalProductId's inventory will be adjusted.
    "productExternalId": "BP1EIDpsm02grq",
    // One of delta, quantity is required. 
    // Indicates incremental or decremental (ex: -100) inventory adjustment.
    "delta": 100,
    // Indicates new quantity. In the example below, the new quantity will be 50.
    "quantity": 50
  }
};