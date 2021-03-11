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
    "customProps": [
      
    ],
    "fields": [
      {
        "schemaType": "Field",
        "name": "_id",
        "type": "ObjectId",
        "required": true,
        "unique": true,
        "defaultValue": "",
        "description": "Collection for all data related to the Suppliers",
        "index": 0,
        "customProps": [
          
        ]
      },
      {
        "schemaType": "Field",
        "name": "name",
        "type": "String",
        "required": true,
        "unique": true,
        "defaultValue": "",
        "description": "Customers name",
        "index": 0,
        "customProps": [
          
        ]
      },
      {
        "schemaType": "Field",
        "name": "nif",
        "type": "String",
        "required": true,
        "unique": true,
        "defaultValue": "",
        "description": "Nif ",
        "index": 0,
        "customProps": [
          
        ]
      },
      {
        "schemaType": "Field",
        "name": "address",
        "type": "Object",
        "required": 1,
        "unique": 0,
        "defaultValue": "{Street: null, number: null, floor: null, doorNr: null, zip: null, city: null, country: null}",
        "description": "{Street: null, number: null, floor: null, doorNr: null, zip: null, city: null, country: null}",
        "index": 0,
        "customProps": [
          
        ]
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
        "customProps": [
          
        ]
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
        "customProps": [
          
        ]
      },
      {
        "schemaType": "Field",
        "name": "brands",
        "type": "Array",
        "required": true,
        "unique": false,
        "defaultValue": "[ ]",
        "description": "Brands names",
        "index": 0,
        "customProps": [
          
        ]
      }
    ]
  },
  {
    "schemaType": "Collection",
    "name": "Orders",
    "defaultValue": "Orders",
    "description": "Collection with all orders done by suppliers, with order details, like quantity, prices, etc.",
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
        "customProps": [
          
        ]
      },
      {
        "schemaType": "Field",
        "name": "orderDate",
        "type": "Date",
        "required": true,
        "unique": false,
        "defaultValue": "",
        "description": "Date when order was submitted",
        "index": 0,
        "customProps": [
          
        ]
      },
      {
        "schemaType": "Field",
        "name": "orderItems",
        "type": "Object",
        "required": true,
        "unique": false,
        "defaultValue": "",
        "description": "{glass order, quantity, price}",
        "index": 0,
        "customProps": [
          
        ]
      }
    ]
  },
  {
    "schemaType": "Collection",
    "name": "Glasses",
    "defaultValue": "",
    "description": "All Glasses for sales. Each glass belongs only to a brand in collection Supplier",
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
        "customProps": [
          
        ]
      },
      {
        "schemaType": "Field",
        "name": "name",
        "type": "String",
        "required": true,
        "unique": false,
        "defaultValue": "",
        "description": "Name of the glass",
        "index": 0,
        "customProps": [
          
        ]
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
        "customProps": [
          
        ]
      },
      {
        "schemaType": "Field",
        "name": "details",
        "type": "Object",
        "required": true,
        "unique": false,
        "defaultValue": "",
        "description": "{diopters, color_glass, glass_frame,  color_frame}\n",
        "index": 0,
        "customProps": [
          
        ]
      },
      {
        "schemaType": "Field",
        "name": "brand",
        "type": "ObjectId",
        "required": true,
        "unique": true,
        "defaultValue": "",
        "description": "Reference to the brand in Suppliers",
        "index": 0,
        "customProps": [
          
        ]
      }
    ]
  },
  {
    "schemaType": "Collection",
    "name": "Sales",
    "defaultValue": "",
    "description": "Customers sales register",
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
        "customProps": [
          
        ]
      },
      {
        "schemaType": "Field",
        "name": "saleDate",
        "type": "Date",
        "required": true,
        "unique": false,
        "defaultValue": "",
        "description": "When sale was done",
        "index": 0,
        "customProps": [
          
        ]
      },
      {
        "schemaType": "Field",
        "name": "customer",
        "type": "ObjectId",
        "required": false,
        "unique": false,
        "defaultValue": "",
        "description": "Reference to colletion Customers",
        "index": 0,
        "customProps": [
          
        ]
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
        "customProps": [
          
        ]
      },
      {
        "schemaType": "Field",
        "name": "salesItems",
        "type": "Object",
        "required": false,
        "unique": false,
        "defaultValue": "",
        "description": "{product, price, quantity}",
        "index": 0,
        "customProps": [
          
        ]
      },
      {
        "schemaType": "Field",
        "name": "salesDoneBy",
        "type": "ObjectId",
        "required": true,
        "unique": false,
        "defaultValue": "",
        "description": "Which employees has done the sales",
        "index": 0,
        "customProps": [
          
        ]
      }
    ]
  },
  {
    "schemaType": "Collection",
    "name": "Customers",
    "defaultValue": "",
    "description": "Collection with all customers details",
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
        "customProps": [
          
        ]
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
        "customProps": [
          
        ]
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
        "customProps": [
          
        ]
      },
      {
        "schemaType": "Field",
        "name": "customerAddress",
        "type": "Object",
        "required": true,
        "unique": false,
        "defaultValue": "",
        "description": "{Street: null, number: null, floor: null, doorNr: null, zip: null, city: null, country: null}",
        "index": 0,
        "customProps": [
          
        ]
      },
      {
        "schemaType": "Field",
        "name": "contactDetails",
        "type": "Object",
        "required": true,
        "unique": false,
        "defaultValue": "",
        "description": "{Email, phone, fax}",
        "index": 0,
        "customProps": [
          
        ]
      },
      {
        "schemaType": "Field",
        "name": "registeredAt",
        "type": "Date",
        "required": true,
        "unique": false,
        "defaultValue": "",
        "description": "Customer's registration date",
        "index": 0,
        "customProps": [
          
        ]
      },
      {
        "schemaType": "Field",
        "name": "recommendedBy",
        "type": "ObjectId",
        "required": false,
        "unique": false,
        "defaultValue": "",
        "description": "In case of recommendation from another customer",
        "index": 0,
        "customProps": [
          
        ]
      }
    ]
  },
  {
    "schemaType": "Collection",
    "name": "Employees",
    "defaultValue": "",
    "description": "",
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
        "customProps": [
          
        ]
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
        "customProps": [
          
        ]
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
        "customProps": [
          
        ]
      }
    ]
  }
]