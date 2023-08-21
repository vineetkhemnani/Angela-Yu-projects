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

