"use strict";

const PORT          = 8080;
const express       = require("express");
const bodyParser    = require("body-parser");
const app           = express();
const MongoClient = require("mongodb").MongoClient;
const MONGODB_URI = "mongodb://localhost:27017/tweeter"; 

app.use(bodyParser.urlencoded({ extended: true }));
app.use(express.static("public"));

//Connects to MongoDB database
MongoClient.connect(MONGODB_URI, (err, db) => {
  if (err) {
    console.error(`Failed to connect: ${MONGODB_URI}`);
    throw err;
  }
  //Put db in datahelper function (using MongoDB db)
  const DataHelpers = require("./lib/data-helpers.js")(db);
  //Put datahelper in the route function (using datahelper called with MongoDB db)
  const tweetsRoutes = require("./routes/tweets")(DataHelpers);
  app.use("/tweets", tweetsRoutes);

})

app.listen(PORT, () => {
  console.log("Example app listening on port " + PORT);
});


