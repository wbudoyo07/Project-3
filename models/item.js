const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const itemSchema = new Schema({
  title: { type: String, required: true },
  // author: { type: String, required: true },
  // details: String,
  date: { type: Date, default: Date.now }
});

const Item = mongoose.model("Item", itemSchema);

module.exports = Item;
