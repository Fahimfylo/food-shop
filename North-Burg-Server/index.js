const express = require("express");
const app = express();
const cors = require("cors");
require("dotenv").config();
const port = process.env.PORT || 5000;

// middleware
app.use(cors());
app.use(express.json());

// Connect DB

const { MongoClient, ServerApiVersion } = require("mongodb");
const uri =`mongodb+srv://${process.env.DB_USER}:${process.env.DB_PASS}@cluster0.yshmh.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0`;

// Create a MongoClient with a MongoClientOptions object to set the Stable API version
const client = new MongoClient(uri, {
  serverApi: {
    version: ServerApiVersion.v1,
    strict: true,
    deprecationErrors: true,
  },
});

async function run() {
  try {
    // Connect the client to the server	(optional starting in v4.7)
    await client.connect();

    // ----------- C R U D Operation ------------
    const menuCollection = client.db("BurgsDB").collection("menu");
    const reviewCollection = client.db("BurgsDB").collection("reviews");
    
    // menu items from db
    app.get('/menu', async(req,res) =>{
        const result = await menuCollection.find().toArray()
        res.send(result)
    })
    
    // review items from db
    app.get('/reviews', async(req,res) =>{
        const result = await reviewCollection.find().toArray()
        res.send(result)
    })

    // Send a ping to confirm a successful connection
    await client.db("admin").command({ ping: 1 });
    console.log(
      "Pinged your deployment. You successfully connected to MongoDB!"
    );
  } finally {
    // Ensures that the client will close when you finish/error
    // await client.close();
  }
}
run().catch(console.dir);

app.get("/", (req, res) => {
  res.send("boss is running");
});
app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});


//ALumMx0zoOyScsc9
// BurgsDB
