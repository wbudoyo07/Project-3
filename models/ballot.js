const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const ballotSchema = new Schema({
  title: { type: String, required: true },
  rank: { type: Number, required: true},
  // author: { type: String, required: true },
  // details: String,
  date: { type: Date, default: Date.now }
});

const Ballot = mongoose.model("Ballot", ballotSchema);

module.exports = Ballot;
