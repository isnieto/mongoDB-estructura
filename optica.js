/* conn = new Mongo("localhost:27017")
db = conn.getDB("optica-database"); */

conn= new Mongo("localhost:27017");
dbo = conn.getDB("optica-database");
dbo.dropDatabase();



dbo.createCollection("customers", function(err, res) {
  if (err) throw err;
  console.log("Collection created!" + res);
}); 

dbo.createCollection("suppliers", function(err, res) {
  if (err) throw err;
  console.log("Collection created!" + res);
}); 

dbo.createCollection("glassCatalog", function(err, res) {
  if (err) throw err;
  console.log("Collection created!" + res);
}); 


dbo.customers.insertMany(
  
  [{
    "_id": {
      "$oid": "60755f93432eed44761676bb"
    },
    "lastName": "Garcia",
    "firstName": "Maria",
    "address": {
      "street": "Calle del camino 20",
      "zipcode": "08025",
      "city": "Valencia"
    },
    "contactDetails": {
      "email": "eiueiur@gmai.com",
      "phone": "936528457"
    },
    "registeredAT": "2019-09-24",
    "recommendedBy": "Antonio Perez",
    "Invoices": [
      {
        "invoiceNr": 1,
        "invoiceDate": "2021-01-01",
        "items": [
          "Impala",
          "coli"
        ],
        "quantity": 2,
        "totalPrice": 200
      }
    ]
  },{
    "_id": {
      "$oid": "60755f93432eed44761676bc"
    },
    "lastName": "Rodriguez",
    "firstName": "Miguel",
    "address": {
      "street": "Plaza santa Ana",
      "zipcode": "9584",
      "city": "Madrid"
    },
    "contactDetails": {
      "email": "migel.Rd@yahoo.es",
      "phone": "600896352"
    },
    "registeredAT": "2021-04-14",
    "recommendedBy": "Antonio Perez",
    "invoices": [
      {
        "invoiceNr": "1",
        "invoiceDate": "2020-12-11",
        "items": [
          "DSH"
        ],
        "quantity": "1",
        "totalPrice": 90
      }
    ]
  }]

);     

dbo.suppliers.insertMany(
  [{
    "_id": {
      "$oid": "60755f93432eed44761676bd"
    },
    "name": "MAlly Sourcing LLC",
    "nif": 938787,
    "address": {
      "street": "Subenstrujenbajenstrasse",
      "number": 750,
      "floor": 1,
      "door": null,
      "zipcode": "22182",
      "city": "Vienna",
      "country": "Austria"
    },
    "phone": 43589548454,
    "fax": 43589548455,
    "orders": [
      {
        "orderDate": {
          "$date": "2019-07-10T22:00:00Z"
        },
        "orderPrice": 365,
        "itemsOrdered": [
          "Impala",
          "calas",
          "logi"
        ],
        "itemPrice": [
          50,
          40,
          35
        ],
        "itemQuantity": [
          2,
          4,
          3
        ]
      }
    ],
    "brands": [
      "RayBan",
      "Ferrari",
      "Auckley"
    ]
  },{
    "_id": {
      "$oid": "60755f93432eed44761676be"
    },
    "name": "Sauge glasses and Sons",
    "nif": 123455,
    "address": {
      "street": "BarracudaStr",
      "number": 750,
      "floor": 1,
      "door": null,
      "zipcode": "22182",
      "city": "Londo",
      "country": "United Kingdom"
    },
    "phone": 35689845247,
    "fax": 35689845289,
    "orders": [
      {
        "orderDate": {
          "$date": "2021-07-10T22:00:00Z"
        },
        "orderPrice": 150,
        "itemsOrdered": [
          "Azulonas",
          "Rojitas"
        ],
        "itemPrice": [
          50,
          40
        ],
        "itemQuantity": [
          2,
          2
        ]
      }
    ],
    "brands": [
      "Multioptica",
      "universal"
    ]
  }]
 
); // insertmany
        
dbo.glassCatalog.insertMany(
  [{
    "_id": {
      "$oid": "60780b725ccea83f5c49115d"
    },
    "glassName": "Impala",
    "glassColor": "white",
    "glassFrame": "hard",
    "frameColor": "white",
    "diopters": 2,
    "pvp": 90,
    "brand": "Rayban",
    "supplierRefence": {
      "$oid": "60755f93432eed44761676bd"
    }
  },{
    "_id": {
      "$oid": "60780b725ccea83f5c49115e"
    },
    "glassName": "coli",
    "glassColor": "white",
    "glassFrame": "pasta",
    "frameColor": "brown",
    "diopters": 2.5,
    "pvp": 60,
    "brand": "MultiOptica",
    "supplierRefence": {
      "$oid": "60755f93432eed44761676be"
    }
  },{
    "_id": {
      "$oid": "60780b725ccea83f5c49115f"
    },
    "glassName": "DSH",
    "glassColor": "yellow",
    "glassFrame": "metal",
    "frameColor": "black",
    "diopters": 3,
    "pvp": 110,
    "brand": "Rayban",
    "supplierRefence": {
      "$oid": "60755f93432eed44761676bd"
    }
  }]
  ); // insertmany