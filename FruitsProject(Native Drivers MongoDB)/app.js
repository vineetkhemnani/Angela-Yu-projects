const { MongoClient} = require("mongodb");

const uri = "mongodb://127.0.0.1:27017";

const client = new MongoClient(uri);


async function run() {
  try {
    await client.connect();

    // const dbName = "FruitsDB";
    
    const dbName = client.db("FruitsDB");
    // await client.db(dbName).command({ ping: 1 });
    const myColl = dbName.collection("Fruits");
    const doc = { name: "Neapolitan pizza", shape: "round" };
    const result = await myColl.insertOne(doc);
    console.log(
   `A document was inserted with the _id: ${result.insertedId}`,
    );
    console.log("Pinged your deployment. You successfully connected to MongoDB!");
  } finally {
    await client.close();
  }
}
run().catch(console.dir);


// const MongoClient = require('mongodb').MongoClient;
// const assert = require('assert');

// //  Connection URL
// const url = 'mongodb://localhost:27017';

// //  Database name
// const dbName = "FruitsDB";

// // Create a new MongoClient and connect it to the url
// const client = new MongoClient(url, { useNewUrlParser: true });

// // Use connect method to connect to the server
// client.connect(function(err){
//     assert.equal(null, err);
//     console.log("Connected successfully to the server");

//     const db = client.db(dbName);

//     client.close();
// });