/* Q3 */db.getCollection('lab4').insertOne(    {        "name": "John",        "dateOfBirth": "1990-01-01T00:00:00Z",        "subjects": ["Application frameworks", "Computer architecture"]    })       /* Q4 */db.getCollection('lab4').find({"name":"John"})/* Q5 */db.getCollection('lab4').find({"_id":ObjectId("6040d0a548be08691d892ff5")})/* Q6 */db.getCollection('lab4').updateOne({name:"John"},{  $addToSet : {subjects:"Distributed Computing"}  })db.getCollection('lab4').updateOne({name:"John"},{  $push : {subjects:"Distributed Computing"}  })/* Q7 */db.getCollection('lab4').insertMany([   { "name": "Smith","dateOfBirth": "1990-01-15T00:00:00Z","subjects": ["Application frameworks", "Computer architecture"],"isActive": true },   { "name": "Jane","dateOfBirth": "1990-02-15T00:00:00Z","subjects": ["Application frameworks", "Computer architecture"],      "isActive": false }])db.getCollection('lab4').find({})   /* Q8 */db.getCollection('lab4').update({ "name": "Smith","isActive": true},{ $push : {subjects:"Distributed Computing"} }  )/* Q9 */db.getCollection('lab4').update( { "name" : "John" },   {     $set: { "isActive": false}   } )   /* Q10 */db.getCollection('lab4').deleteOne({"name" : "John"})