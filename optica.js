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


dbo.customers.insertMany(
  
  [{
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
    "invoices": [
      {
        "id": {
          "$oid": "60754e4cef864d9e44f7a550"
        },
        "items": [
          {
            "glassId": 1,
            "quantity": 2
          },
          {
            "glassID": 2,
            "quantity": "1"
          }
        ],
        "finalPrice": 200
      }
    ]
  },
  {
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
        "id": {
          "$oid": "60754e4cef864d9e44f7a550"
        },
        "items": [
          {
            "glassId": 13,
            "quantity": 1
          }
        ],
        "finalPrice": 80
      }
    ]
  }]

);     

dbo.suppliers.insertMany(
  [{
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
    "glasses": [
      {
        "id": "1",
        "glassName": "Impala",
        "price": 90,
        "diopters": "2",
        "colorGlass": "blue",
        "frameGlass": "hard",
        "colorFrame": "blue",
        "brand": "Ray-Ban"
      },
      {
        "id": "2",
        "glassName": "calas",
        "price": 40,
        "diopters": "1",
        "colorGlass": "black",
        "frameGlass": "hard",
        "colorFrame": "blue",
        "brand": "Ray-Ban"
      },
      {
        "id": "3",
        "glassName": "Logi",
        "price": 90,
        "diopters": "2.7",
        "colorGlass": "red",
        "frameGlass": "semihard",
        "colorFrame": "red",
        "brand": "Dakley"
      }
    ]
  },
  {
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
    "glasses": [
      {
        "id": "13",
        "glassName": "Azulonas",
        "pricePVP": 80,
        "diopters": 2,
        "colorGlass": "red",
        "frameGlass": "soft",
        "colorFrame": "red",
        "brand": "MultiOptica"      
      },
      {
       "id": "14",
        "glassName": "Rojitas",
        "pricePVP": "56",
        "diopters": 1.4,
        "colorGlass": "brown",
        "frameGlass": "hard",
        "colorFrame": "black",
        "brand": "MultiOptica"
      }
    ]
  }]

); // insertmany
        
