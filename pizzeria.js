[
    {
      "schemaType": "Collection",
      "name": "Products",
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
          "name": "name",
          "type": "String",
          "required": true,
          "unique": true,
          "defaultValue": "",
          "description": "name of the product",
          "index": 0,
          "customProps": [
            
          ]
        },
        {
          "schemaType": "Field",
          "name": "description",
          "type": "String",
          "required": true,
          "unique": false,
          "defaultValue": "",
          "description": "Description of the product",
          "index": 0,
          "customProps": [
            
          ]
        },
        {
          "schemaType": "Field",
          "name": "picture",
          "type": "Mixed",
          "required": true,
          "unique": false,
          "defaultValue": "",
          "description": "Picture of the prodcut",
          "index": 0,
          "customProps": [
            
          ]
        },
        {
          "schemaType": "Field",
          "name": "price",
          "type": "Double",
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
          "name": "category",
          "type": "Array",
          "required": false,
          "unique": false,
          "defaultValue": "",
          "description": "Category of the pizza",
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
          "type": "ObjectId",
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
          "description": "{address, number, floor, zipcode}",
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
          "description": "{email, phone}",
          "index": 0,
          "customProps": [
            
          ]
        },
        {
          "schemaType": "Field",
          "name": "city",
          "type": "ObjectId",
          "required": true,
          "unique": false,
          "defaultValue": "",
          "description": "Reference to city collection\n",
          "index": 0,
          "customProps": [
            
          ]
        }
      ]
    },
    {
      "schemaType": "Collection",
      "name": "Cities",
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
          "name": "cityName",
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
          "name": "state",
          "type": "ObjectId",
          "required": true,
          "unique": false,
          "defaultValue": "",
          "description": "State which city belongs to",
          "index": 0,
          "customProps": [
            
          ]
        }
      ]
    },
    {
      "schemaType": "Collection",
      "name": "States",
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
          "name": "stateName",
          "type": "String",
          "required": true,
          "unique": false,
          "defaultValue": "",
          "description": "",
          "index": 0,
          "customProps": [
            
          ]
        }
      ]
    },
    {
      "schemaType": "Collection",
      "name": "Stores",
      "defaultValue": "",
      "description": "",
      "fields": [
        {
          "schemaType": "Field",
          "name": "storeName",
          "type": "String",
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
          "name": "storeAddress",
          "type": "Object",
          "required": true,
          "unique": false,
          "defaultValue": "",
          "description": "{street, number, floor, door, zipcode}\n",
          "index": 0,
          "customProps": [
            
          ]
        },
        {
          "schemaType": "Field",
          "name": "city",
          "type": "ObjectId",
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
          "name": "employees",
          "type": "Array",
          "required": false,
          "unique": false,
          "defaultValue": "",
          "description": "Array with all employee IDs",
          "index": 0,
          "customProps": [
            
          ]
        },
        {
          "schemaType": "Field",
          "name": "New Field",
          "type": "ObjectId",
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
          "name": "_id",
          "type": "ObjectId",
          "required": true,
          "unique": true,
          "defaultValue": "",
          "description": "",
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
          "type": "ObjectId",
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
          "name": "job",
          "type": "String",
          "required": true,
          "unique": false,
          "defaultValue": "",
          "description": "Typ of job done in store",
          "index": 0,
          "customProps": [
            
          ]
        },
        {
          "schemaType": "Field",
          "name": "nif",
          "type": "String",
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
          "name": "phoneNr",
          "type": "Integer",
          "required": true,
          "unique": false,
          "defaultValue": "",
          "description": "",
          "index": 0,
          "customProps": [
            
          ]
        }
      ]
    },
    {
      "schemaType": "Collection",
      "name": "Orders",
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
          "name": "orderDate",
          "type": "Date",
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
          "name": "storeId",
          "type": "ObjectId",
          "required": true,
          "unique": false,
          "defaultValue": "",
          "description": "Reference to Store that process order",
          "index": 0,
          "customProps": [
            
          ]
        },
        {
          "schemaType": "Field",
          "name": "customerID",
          "type": "ObjectId",
          "required": true,
          "unique": false,
          "defaultValue": "",
          "description": "who has made the order",
          "index": 0,
          "customProps": [
            
          ]
        },
        {
          "schemaType": "Field",
          "name": "productsOrdered",
          "type": "Object",
          "required": false,
          "unique": false,
          "defaultValue": "",
          "description": "{product, price, quantity}",
          "index": 0,
          "customProps": [
            
          ]
        }
      ]
    },
    {
      "schemaType": "Collection",
      "name": "deliverService",
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
          "name": "serviceDate",
          "type": "Date",
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
          "name": "typeService",
          "type": "String",
          "required": false,
          "unique": false,
          "defaultValue": "",
          "description": "Delievered or picked up",
          "index": 0,
          "customProps": [
            
          ]
        },
        {
          "schemaType": "Field",
          "name": "order",
          "type": "ObjectId",
          "required": true,
          "unique": true,
          "defaultValue": "",
          "description": "OrderNr",
          "index": 0,
          "customProps": [
            
          ]
        },
        {
          "schemaType": "Field",
          "name": "seviceDoneBy",
          "type": "ObjectId",
          "required": true,
          "unique": false,
          "defaultValue": "",
          "description": "Employee who has done the service",
          "index": 0,
          "customProps": [
            
          ]
        }
      ]
    }
  ]       