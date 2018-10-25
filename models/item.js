const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const itemSchema = new Schema({
  mood: { type: String, required: true },
  topic: { type: String, required: true },
  phonenumber: { type: Number, required: false },
  username: {type:String, require: false},
  date: { type: Date, default: Date.now },
  response:[
    {
      type: Schema.Types.ObjectId,
      ref: "response"
    }
]
});

const Item = mongoose.model("Item", itemSchema);

//title: topic
//mood:
//response

module.exports = Item;
