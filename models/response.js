const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const responseSchema = new Schema({
  response: { type: String, required: false },
  date: { type: Date, default: Date.now },
});

const response = mongoose.model("response", responseSchema);


module.exports = response;
