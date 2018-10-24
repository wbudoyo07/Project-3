const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const itemSchema = new Schema({
  mood: { type: String, required: true },
  topic: { type: String, required: true },
  response: { type: String, required: false },
  date: { type: Date, default: Date.now }
});

const Item = mongoose.model("Item", itemSchema);

//title: topic
//mood:
//response

module.exports = Item;
