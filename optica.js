                    [
  {
    "schemaType": "Collection",
    "name": "Suppliers",
    "type": "ObjectId",
    "required": true,
    "unique": true,
    "defaultValue": "",
    "description": "",
    "index": 0,
    "customProps": [],
    "fields": [
      {
        "schemaType": "Field",
        "name": "_id",
        "type": "ObjectId",
        "required": true,
        "unique": true,
        "defaultValue": "",
        "description": "",
        "index": 0,
        "customProps": []
      },
      {
        "schemaType": "Field",
        "name": "name",
        "type": "String",
        "required": true,
        "unique": true,
        "defaultValue": "",
        "description": "",
        "index": 0,
        "customProps": []
      },
      {
        "schemaType": "Field",
        "name": "nif",
        "type": "String",
        "required": true,
        "unique": true,
        "defaultValue": "",
        "description": "",
        "index": 0,
        "customProps": []
      },
      {
        "schemaType": "Field",
        "name": "address",
        "type": "Object",
        "required": true,
        "unique": 0,
        "defaultValue": "{Street: null, number: null, floor: null, doorNr: null, zip: null, city: null, country: null}",
        "description": "{Street: null, number: null, floor: null, doorNr: null, zip: null, city: null, country: null}",
        "index": 0,
        "customProps": []
      },
      {
        "schemaType": "Field",
        "name": "phone",
        "type": "Integer",
        "required": false,
        "unique": true,
        "defaultValue": "",
        "description": "",
        "index": 0,
        "customProps": []
      },
      {
        "schemaType": "Field",
        "name": "fax",
        "type": "Integer",
        "required": false,
        "unique": false,
        "defaultValue": "",
        "description": "",
        "index": 0,
        "customProps": []
      },
      {
        "schemaType": "Field",
        "name": "brands",
        "type": "Array",
        "required": true,
        "unique": false,
        "defaultValue": "[ ]",
        "description": "Array [Brandnames]",
        "index": 0,
        "customProps": []
      }
    ]
  },
  {
    "schemaType": "Collection",
    "name": "Glasses",
    "type": "ObjectId",
    "required": true,
    "unique": true,
    "defaultValue": "",
    "description": "",
    "index": 0,
    "customProps": [],
    "fields": [
      {
        "schemaType": "Field",
        "name": "_id",
        "type": "ObjectId",
        "required": true,
        "unique": true,
        "defaultValue": "",
        "description": "",
        "index": 0,
        "customProps": []
      },
      {
        "schemaType": "Field",
        "name": "name",
        "type": "String",
        "required": 1,
        "unique": 0,
        "defaultValue": "",
        "description": "",
        "index": 0,
        "customProps": []
      },
      {
        "schemaType": "Field",
        "name": "price",
        "type": "Double",
        "required": false,
        "unique": false,
        "defaultValue": "",
        "description": "",
        "index": 0,
        "customProps": []
      },
      {
        "schemaType": "Field",
        "name": "details",
        "type": "Object",
        "required": 0,
        "unique": 0,
        "defaultValue": "",
        "description": "{diopters: null, glass_color: null, glass_frame: null, frame_color: null}",
        "index": 0,
        "customProps": []
      },
      {
        "schemaType": "Field",
        "name": "brand",
        "type": "ObjectId",
        "required": false,
        "unique": false,
        "defaultValue": "",
        "description": "",
        "index": 0,
        "customProps": []
      }
    ]
  },
  {
    "schemaType": "Collection",
    "name": "Customers",
    "type": "ObjectId",
    "required": true,
    "unique": true,
    "defaultValue": "",
    "description": "",
    "index": 0,
    "customProps": [],
    "fields": [
      {
        "schemaType": "Field",
        "name": "_id",
        "type": "ObjectId",
        "required": true,
        "unique": true,
        "defaultValue": "",
        "description": "",
        "index": 0,
        "customProps": []
      },
      {
        "schemaType": "Field",
        "name": "firstName",
        "type": "String",
        "required": true,
        "unique": false,
        "defaultValue": "",
        "description": "",
        "index": 0,
        "customProps": []
      },
      {
        "schemaType": "Field",
        "name": "lastName",
        "type": "String",
        "required": true,
        "unique": false,
        "defaultValue": "",
        "description": "",
        "index": 0,
        "customProps": []
      },
      {
        "schemaType": "Field",
        "name": "address",
        "type": "Object",
        "required": true,
        "unique": false,
        "defaultValue": "{Street: null, number: null, floor: null, doorNr: null, zip: null, city: null, country: null}",
        "description": "{Street: null, number: null, floor: null, doorNr: null, zip: null, city: null, country: null}",
        "index": 0,
        "customProps": []
      },
      {
        "schemaType": "Field",
        "name": "registeredAt",
        "type": "Date",
        "required": true,
        "unique": false,
        "defaultValue": "",
        "description": "",
        "index": 0,
        "customProps": []
      },
      {
        "schemaType": "Field",
        "name": "recommendedBy",
        "type": "ObjectId",
        "required": false,
        "unique": false,
        "defaultValue": "",
        "description": "Customer._id",
        "index": 0,
        "customProps": []
      }
    ]
  },
  {
    "schemaType": "Collection",
    "name": "Orders",
    "type": "ObjectId",
    "required": true,
    "unique": true,
    "defaultValue": "",
    "description": "",
    "index": 0,
    "customProps": [],
    "fields": [
      {
        "schemaType": "Field",
        "name": "_id",
        "type": "ObjectId",
        "required": true,
        "unique": true,
        "defaultValue": "",
        "description": "",
        "index": 0,
        "customProps": []
      },
      {
        "schemaType": "Field",
        "name": "orderDate",
        "type": "Date",
        "required": false,
        "unique": false,
        "defaultValue": "",
        "description": "",
        "index": 0,
        "customProps": []
      },
      {
        "schemaType": "Field",
        "name": "supplier",
        "type": "ObjectId",
        "required": false,
        "unique": false,
        "defaultValue": "",
        "description": "",
        "index": 0,
        "customProps": []
      },
      {
        "schemaType": "Field",
        "name": "order_items",
        "type": "Array",
        "required": false,
        "unique": false,
        "defaultValue": "[ ]",
        "description": "Array de objetos con cantidad gafas, precios....",
        "index": 0,
        "customProps": []
      }
    ]
  },
  {
    "schemaType": "Collection",
    "name": "Sales",
    "type": "ObjectId",
    "required": true,
    "unique": true,
    "defaultValue": "",
    "description": "",
    "index": 0,
    "customProps": [],
    "fields": [
      {
        "schemaType": "Field",
        "name": "_id",
        "type": "ObjectId",
        "required": true,
        "unique": true,
        "defaultValue": "",
        "description": "",
        "index": 0,
        "customProps": []
      },
      {
        "schemaType": "Field",
        "name": "saleDate",
        "type": "Date",
        "required": true,
        "unique": false,
        "defaultValue": "Date()",
        "description": "",
        "index": 0,
        "customProps": []
      },
      {
        "schemaType": "Field",
        "name": "customer",
        "type": "ObjectId",
        "required": true,
        "unique": false,
        "defaultValue": "",
        "description": "",
        "index": 0,
        "customProps": []
      },
      {
        "schemaType": "Field",
        "name": "totalPrice",
        "type": "Double",
        "required": false,
        "unique": false,
        "defaultValue": "",
        "description": "",
        "index": 0,
        "customProps": []
      },
      {
        "schemaType": "Field",
        "name": "sale_items",
        "type": "Array",
        "required": 0,
        "unique": 0,
        "defaultValue": "[ ]",
        "description": "",
        "index": 0,
        "customProps": []
      }
    ]
  },
  {
    "schemaType": "Collection",
    "name": "Employees",
    "type": "ObjectId",
    "required": true,
    "unique": true,
    "defaultValue": "",
    "description": "",
    "index": 0,
    "customProps": [],
    "fields": [
      {
        "schemaType": "Field",
        "name": "_id",
        "type": "ObjectId",
        "required": true,
        "unique": true,
        "defaultValue": "",
        "description": "",
        "index": 0,
        "customProps": []
      },
      {
        "schemaType": "Field",
        "name": "firstName",
        "type": "String",
        "required": false,
        "unique": false,
        "defaultValue": "",
        "description": "",
        "index": 0,
        "customProps": []
      },
      {
        "schemaType": "Field",
        "name": "lastName",
        "type": "String",
        "required": false,
        "unique": false,
        "defaultValue": "",
        "description": "",
        "index": 0,
        "customProps": []
      }
    ]
  }
]
                