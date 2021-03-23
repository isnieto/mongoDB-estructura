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

dbo.createCollection("sales", function(err, res) {
  if (err) throw err;
      console.log("Collection created!" + res);
});

dbo.createCollection("glasses", function(err, res) {
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
      "recommendedBy": "Antonio Perez"
    },{
      
      "lastName": "Perez",
      "firstName": "Alfonso",
      "address": {
        "street": "Calle del camino 20",
        "zipcode": "08025",
        "city": "Valencia"
      },
      "contactDetails": {
        "email": "8eiur@hotmail.com",
        "phone": "909528457"
      },
      "registeredAT": "2019-09-24",
      "recommendedBy": "Sonia Rodriguez"
    },{
      
      "lastName": "martinez",
      "firstName": "Javier",
      "address": {
        "street": "Plaza del pueblo",
        "zipcode": "08532",
        "city": "Cadiz"
      },
      "contactDetails": {
        "email": "j.ca@gmai.com",
        "phone": "9754097"
      },
      "registeredAT": "2019-09-24",
      "recommendedBy": "Antonio Perez"
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
          "brands": [
            "Ray-Ban",
            "Dakley",
            "Polaroid",
            "Ferrari"
          ],
          "orders": [
            {
              "orderDate": {
                "date": "2019-07-10T22:00:00Z"
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
          ]
        },{
          
          "name": "National Association Glass",
          "nif": 58998,
          "address": {
            "street": "Austin Marketing Str.",
            "number": 14,
            "floor": 0,
            "door": 3,
            "zipcode": "55908",
            "city": "London",
            "country": "United-Kingdom"
          },
          "phone": 1207288200,
          "fax": 1207288203,
          "brands": [
            "Dior",
            "Ferrari",
            "Boss",
            "Tous"
          ]
        }]

); // insertmany
    

dbo.glasses.insertMany(
                    [{
                      
                      "name": "Impala",
                      "price": 90,
                      "details": {
                        "diopters": 2,
                        "color glass": "blue",
                        "glass frame": "hard",
                        "color frame": "blue"
                      },
                      "brand": {
                        "oid": "60507e642e7c2f29e619aca1"
                      }
                    },{
                      
                      "name": "calas",
                      "price": 120,
                      "details": {
                        "diopters": 0.1,
                        "color glass": "red",
                        "glass frame": "semi-hard",
                        "color frame": "blue"
                      },
                      "brand": {
                        "oid": "60507e642e7c2f29e619aca1"
                      }
                    },{
                      
                      "name": "logi",
                      "price": 75,
                      "details": {
                        "diopters": 0.7,
                        "color glass": "yellow",
                        "glass frame": "soft",
                        "color frame": "white"
                      },
                      "brand": {
                        "oid": "60507e642e7c2f29e619aca2"
                      }
                    }]  
  
                  
    
); // insertmany
        
dbo.sales.insertMany(
  [{
    "_id": {
      "oid": "60509c192e7c2f29e619acac"
    },
    "items": [
      {
        "glass": {
          "oid": "60508e712e7c2f29e619aca6"
        },
        "quantity": 1
      },
      {
        "glass": {
          "oid": "60508e712e7c2f29e619aca8"
        },
        "quantity": 1
      }
    ],
    "finalPrice": 165,
    "salesDate": "2020-11-01",
    "salesDoneBy": "Antonio Perez",
    "customer": {
      "oid": "605099bf2e7c2f29e619aca9"
    }
  },{
    "_id": {
      "oid": "60509c192e7c2f29e619acad"
    },
    "items": [
      {
        "glass": {
          "oid": "60508e712e7c2f29e619aca7"
        },
        "quantity": 1
      }
    ],
    "finalPrice": 120,
    "salesDate": "2020-05-12",
    "salesDoneBy": "Antonio Perez",
    "customer": {
      "oid": "605099bf2e7c2f29e619acab"
    }
  }]                    
                    
      
); // insertmany

        
