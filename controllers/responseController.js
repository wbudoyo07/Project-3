const db = require("../models");

// Defining methods for the ItemsController
module.exports = {
  findAll: function(req, res) {
    db.response
      .find(req.query)
      .sort({ date: -1 })
      .then(dbModel => res.json(dbModel))
      .catch(err => res.status(422).json(err));
  },


  createResponse : function(req,res) {
    db.response
      .create(req.body)
      .then(function(dbModel) {
        return db.Item.findOneAndUpdate({ _id:req.params.id}, { $push: { response: dbModel }},  { new: true })
      })
      .then(function(dbModel) {
        res.json(dbModel);
      })
      .catch(function(err) {
        res.json(err);
      })
  }

};
