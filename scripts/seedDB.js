const mongoose = require("mongoose");
const db = require("../models");

// This file empties the items collection and inserts the items below

mongoose.connect(
  process.env.MONGODB_URI ||
  "mongodb://localhost/reactreadinglist"
);

const itemSeed = [
  {
    title: "Ekkle",
    details:
      "Voting app using choice voting sent via text.",
    date: new Date(Date.now())
  },
  {
    title: "TubeOut",
    details:
      "Tuning OUt Youtube",
    date: new Date(Date.now())
  },
  {
    title: "Ref-click",
    details:
      "Accessing academic library references via a Chrome Extension",
    date: new Date(Date.now())
  }
];

db.Item
  .remove({})
  .then(() => db.Item.collection.insertMany(item))
  .then(data => {
    console.log(data.result.n + " records inserted!");
    process.exit(0);
  })
  .catch(err => {
    console.error(err);
    process.exit(1);
  });
